/* =====================================================================
   TALQO — API panelu (Cloudflare Pages Functions)
   Powiązania: KV „TRESCI” (wymagane), Workers AI „AI” (opcjonalne — tłumaczenia)
   Zmienne:    ADMIN_PASSWORD_HASH, SESSION_SECRET
   ===================================================================== */
const enc = new TextEncoder();
const SESJA_S = 8 * 3600, CIASTKO = 'talqo_sesja', ITER = 100000;
const J = (o, s = 200, h = {}) => new Response(JSON.stringify(o), { status: s, headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store', ...h } });
const blad = (txt, s = 400, extra = {}) => J({ ok: false, blad: txt, ...extra }, s);
const b64 = (u8) => { let s = ''; for (const b of u8) s += String.fromCharCode(b); return btoa(s); };
const unb64 = (s) => Uint8Array.from(atob(s), (c) => c.charCodeAt(0));
const rowne = (a, b) => { if (a.length !== b.length) return false; let r = 0; for (let i = 0; i < a.length; i++) r |= a[i] ^ b[i]; return r === 0; };
const losowe = (n = 12) => { const u = crypto.getRandomValues(new Uint8Array(n)); return Array.from(u, (b) => b.toString(16).padStart(2, '0')).join(''); };

async function pbkdf2(haslo, sol, iter) {
  const klucz = await crypto.subtle.importKey('raw', enc.encode(haslo), 'PBKDF2', false, ['deriveBits']);
  return new Uint8Array(await crypto.subtle.deriveBits({ name: 'PBKDF2', hash: 'SHA-256', salt: sol, iterations: iter }, klucz, 256));
}
async function hashHasla(haslo) {
  const sol = crypto.getRandomValues(new Uint8Array(16));
  return `pbkdf2$${ITER}$${b64(sol)}$${b64(await pbkdf2(haslo, sol, ITER))}`;
}
async function sprawdzHaslo(haslo, zapis) {
  const p = String(zapis || '').split('$');
  if (p.length !== 4 || p[0] !== 'pbkdf2') return false;
  try { return rowne(await pbkdf2(haslo, unb64(p[2]), +p[1]), unb64(p[3])); } catch (e) { return false; }
}
async function hmac(sekret, tekst) {
  const k = await crypto.subtle.importKey('raw', enc.encode(sekret), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']);
  return b64(new Uint8Array(await crypto.subtle.sign('HMAC', k, enc.encode(tekst)))).replace(/[+/=]/g, (c) => ({ '+': '-', '/': '_', '=': '' }[c]));
}
const aktualnyHash = async (env) => (await env.TRESCI.get('haslo')) || env.ADMIN_PASSWORD_HASH || '';
async function ciastkoSesji(env, hash) {
  const exp = Date.now() + SESJA_S * 1000, nonce = losowe(8);
  const podpis = await hmac(env.SESSION_SECRET, `${exp}.${nonce}.${hash}`);
  return `${CIASTKO}=${exp}.${nonce}.${podpis}; Path=/; Max-Age=${SESJA_S}; HttpOnly; Secure; SameSite=Strict`;
}
async function zalogowany(request, env) {
  if (!env.SESSION_SECRET) return false;
  const m = (request.headers.get('Cookie') || '').match(new RegExp('(?:^|;\\s*)' + CIASTKO + '=([^;]+)'));
  if (!m) return false;
  const [exp, nonce, podpis] = m[1].split('.');
  if (!exp || !nonce || !podpis || +exp < Date.now()) return false;
  const hash = await aktualnyHash(env); // zmiana hasła unieważnia stare sesje
  const ok = await hmac(env.SESSION_SECRET, `${exp}.${nonce}.${hash}`);
  return rowne(enc.encode(ok), enc.encode(podpis));
}
function csrf(request) {
  if (request.headers.get('X-Talqo-Panel') !== '1') return false;
  const o = request.headers.get('Origin');
  if (o) { try { if (new URL(o).host !== new URL(request.url).host) return false; } catch (e) { return false; } }
  return true;
}
const ip = (request) => request.headers.get('CF-Connecting-IP') || 'lokalny';
async function limit(env, klucz, max, oknoS) {
  const k = 'lim:' + klucz, teraz = Date.now();
  let r = await env.TRESCI.get(k, 'json');
  if (!r || r.do < teraz) r = { n: 0, do: teraz + oknoS * 1000 };
  if (r.n >= max) return { ok: false, min: Math.max(1, Math.ceil((r.do - teraz) / 60000)) };
  r.n++;
  await env.TRESCI.put(k, JSON.stringify(r), { expirationTtl: Math.max(60, oknoS) });
  return { ok: true };
}
async function cialo(request, max = 950000) {
  const t = await request.text();
  if (t.length > max) throw new Error('za-duze');
  return t ? JSON.parse(t) : {};
}
const lista = async (env, k) => (await env.TRESCI.get(k, 'json')) || [];
const tnij = (s, n) => String(s == null ? '' : s).slice(0, n);
const MAIL = /^[^\s@<>()[\]\\,;:"]+@[a-z0-9-]+(\.[a-z0-9-]+)*\.[a-z]{2,}$/i;

async function zapiszTresci(env, dane) {
  const stare = await env.TRESCI.get('tresci');
  if (stare) { // kopia poprzedniej wersji, trzymamy 10 ostatnich
    const id = String(Date.now());
    let spis = await lista(env, 'kopie');
    await env.TRESCI.put('kopia:' + id, stare);
    spis.unshift({ id, ts: Date.now(), rozmiar: stare.length });
    for (const x of spis.slice(10)) await env.TRESCI.delete('kopia:' + x.id);
    await env.TRESCI.put('kopie', JSON.stringify(spis.slice(0, 10)));
  }
  await env.TRESCI.put('tresci', JSON.stringify(dane));
}

export async function onRequest({ request, env, params }) {
  const sc = [].concat(params.sciezka || []), a = sc[0] || '', b = sc[1] || '', m = request.method;
  if (!env.TRESCI) return blad('Baza danych nie jest podłączona. Dodaj powiązanie KV o nazwie TRESCI.', 503);
  try {
    /* ---------- publiczne odczyty ---------- */
    if (a === 'tresci' && m === 'GET') return J({ ok: true, dane: await env.TRESCI.get('tresci', 'json') });
    if (a === 'zdjecia' && m === 'GET' && b) {
      const r = await env.TRESCI.getWithMetadata('img:' + b.replace(/[^a-z0-9]/gi, ''), 'arrayBuffer');
      if (!r || !r.value) return new Response('Brak zdjęcia', { status: 404 });
      return new Response(r.value, { headers: { 'Content-Type': (r.metadata && r.metadata.typ) || 'image/jpeg', 'Cache-Control': 'public, max-age=31536000, immutable' } });
    }
    if (a === 'sesja' && m === 'GET') return J({ ok: true, zalogowany: await zalogowany(request, env) });
    if (m === 'GET' || m === 'HEAD') { if (!(await zalogowany(request, env))) return blad('Sesja wygasła. Zaloguj się ponownie.', 401); }
    else if (!csrf(request)) return blad('Żądanie odrzucone (brak nagłówka bezpieczeństwa).', 403);

    /* ---------- logowanie ---------- */
    if (a === 'login' && m === 'POST') {
      const hash = await aktualnyHash(env);
      if (!hash || !env.SESSION_SECRET) return blad('Panel nie jest jeszcze skonfigurowany: ustaw zmienne ADMIN_PASSWORD_HASH i SESSION_SECRET.', 503);
      const k = 'proby:' + ip(request), teraz = Date.now();
      let p = await env.TRESCI.get(k, 'json');
      if (p && p.do < teraz) p = null;
      if (p && p.n >= 5) return blad('Zbyt wiele nieudanych prób. Spróbuj ponownie za ' + Math.ceil((p.do - teraz) / 60000) + ' min.', 429);
      const d = await cialo(request, 2000);
      if (!(await sprawdzHaslo(tnij(d.haslo, 200), hash))) {
        p = p || { n: 0, do: teraz + 15 * 60000 }; p.n++;
        await env.TRESCI.put(k, JSON.stringify(p), { expirationTtl: 900 });
        return blad('Nieprawidłowe hasło.' + (p.n >= 3 ? ' Pozostało prób: ' + Math.max(0, 5 - p.n) + '.' : ''), 401);
      }
      await env.TRESCI.delete(k);
      return J({ ok: true }, 200, { 'Set-Cookie': await ciastkoSesji(env, hash) });
    }
    if (a === 'logout' && m === 'POST') return J({ ok: true }, 200, { 'Set-Cookie': `${CIASTKO}=; Path=/; Max-Age=0; HttpOnly; Secure; SameSite=Strict` });

    /* ---------- publiczne zapisy: formularze, newsletter, licznik ---------- */
    if (a === 'zapytania' && m === 'POST') {
      const d = await cialo(request, 8000);
      if (d.hp || +d.t < 2500) return J({ ok: true }); // bot: udajemy sukces
      if (!MAIL.test(d.email || '') || tnij(d.imie, 100).trim().length < 3) return blad('Niepoprawne dane formularza.');
      if (!(await limit(env, 'zap:' + ip(request), 5, 600)).ok) return blad('Zbyt wiele wiadomości. Spróbuj później.', 429);
      const l = await lista(env, 'zapytania');
      l.unshift({ id: losowe(6), ts: Date.now(), rodzaj: d.rodzaj === 'termin' ? 'termin' : 'kontakt', imie: tnij(d.imie, 100), email: tnij(d.email, 120), tel: tnij(d.tel, 20), jezyk: tnij(d.jezyk, 40), kurs: tnij(d.kurs, 60), termin: tnij(d.termin, 160), wiad: tnij(d.wiad, 2000), lang: tnij(d.lang, 5) });
      await env.TRESCI.put('zapytania', JSON.stringify(l.slice(0, 300)));
      return J({ ok: true });
    }
    if (a === 'newsletter' && m === 'POST') {
      const d = await cialo(request, 2000), e = tnij(d.email, 120).trim().toLowerCase();
      if (d.hp) return J({ ok: true });
      if (!MAIL.test(e)) return blad('Niepoprawny adres e-mail.');
      if (!(await limit(env, 'nl:' + ip(request), 5, 600)).ok) return blad('Zbyt wiele prób. Spróbuj później.', 429);
      const l = await lista(env, 'newsletter');
      if (!l.some((x) => x.email === e)) { l.unshift({ id: losowe(6), email: e, ts: Date.now(), lang: tnij(d.lang, 5) }); await env.TRESCI.put('newsletter', JSON.stringify(l.slice(0, 5000))); }
      return J({ ok: true });
    }
    if (a === 'statystyki' && m === 'POST') {
      const d = await cialo(request, 500), lang = /^[a-z]{2}$/.test(d.lang || '') ? d.lang : 'pl';
      const dzis = new Date().toISOString().slice(0, 10), st = (await env.TRESCI.get('statystyki', 'json')) || {};
      st[dzis] = st[dzis] || {}; st[dzis][lang] = (st[dzis][lang] || 0) + 1;
      const dni = Object.keys(st).sort(); for (const x of dni.slice(0, Math.max(0, dni.length - 120))) delete st[x];
      await env.TRESCI.put('statystyki', JSON.stringify(st));
      return J({ ok: true });
    }

    /* ---------- wszystko poniżej: tylko po zalogowaniu ---------- */
    if (m !== 'GET' && !(await zalogowany(request, env))) return blad('Sesja wygasła. Zaloguj się ponownie.', 401);

    if (a === 'tresci' && m === 'PUT') {
      const d = await cialo(request);
      if (!d || d._sig !== 'talqo-cms' || !Array.isArray(d.sekcje)) return blad('To nie są dane tej strony.');
      await zapiszTresci(env, d);
      return J({ ok: true, ts: Date.now() });
    }
    if (a === 'haslo' && m === 'POST') {
      const d = await cialo(request, 2000), hash = await aktualnyHash(env);
      if (!(await sprawdzHaslo(tnij(d.obecne, 200), hash))) return blad('Obecne hasło jest nieprawidłowe.', 401);
      if (tnij(d.nowe, 200).length < 10) return blad('Nowe hasło musi mieć co najmniej 10 znaków.');
      const nowy = await hashHasla(tnij(d.nowe, 200));
      await env.TRESCI.put('haslo', nowy);
      return J({ ok: true }, 200, { 'Set-Cookie': await ciastkoSesji(env, nowy) });
    }
    if (a === 'zdjecia' && m === 'POST') {
      const typ = (request.headers.get('Content-Type') || '').split(';')[0];
      if (!/^image\/(jpeg|webp|png)$/.test(typ)) return blad('Dozwolone są zdjęcia JPEG, WebP lub PNG.');
      const buf = await request.arrayBuffer();
      if (buf.byteLength > 2500000) return blad('Zdjęcie jest za duże (limit 2,5 MB po zmniejszeniu).', 413);
      const id = losowe(10);
      await env.TRESCI.put('img:' + id, buf, { metadata: { typ, ts: Date.now() } });
      return J({ ok: true, url: '/api/zdjecia/' + id });
    }
    if (a === 'kopie' && m === 'GET') return J({ ok: true, kopie: await lista(env, 'kopie') });
    if (a === 'kopie' && b === 'przywroc' && m === 'POST') {
      const d = await cialo(request, 500), k = await env.TRESCI.get('kopia:' + String(d.id || '').replace(/\D/g, ''), 'json');
      if (!k) return blad('Nie znaleziono tej kopii.', 404);
      await zapiszTresci(env, k);
      return J({ ok: true, dane: k });
    }
    if ((a === 'zapytania' || a === 'newsletter') && m === 'GET') return J({ ok: true, lista: await lista(env, a) });
    if ((a === 'zapytania' || a === 'newsletter') && m === 'DELETE' && b) {
      const l = (await lista(env, a)).filter((x) => x.id !== b);
      await env.TRESCI.put(a, JSON.stringify(l));
      return J({ ok: true });
    }
    if (a === 'statystyki' && m === 'GET') return J({ ok: true, dni: (await env.TRESCI.get('statystyki', 'json')) || {} });
    if (a === 'tlumacz' && m === 'POST') {
      if (!env.AI) return blad('Tłumaczenie automatyczne wymaga powiązania Workers AI o nazwie AI.', 503);
      const d = await cialo(request, 12000), J_ = { en: 'english', it: 'italian', de: 'german', fr: 'french', es: 'spanish', uk: 'ukrainian', cs: 'czech' };
      if (!J_[d.na]) return blad('Ten język nie jest obsługiwany przez tłumacza.');
      const czesci = tnij(d.tekst, 6000).split('\n'), wynik = [];
      for (const c of czesci) wynik.push(c.trim() ? (await env.AI.run('@cf/meta/m2m100-1.2b', { text: c, source_lang: 'polish', target_lang: J_[d.na] })).translated_text : c);
      return J({ ok: true, tekst: wynik.join('\n') });
    }
    return blad('Nie ma takiej funkcji.', 404);
  } catch (e) {
    if (e && e.message === 'za-duze') return blad('Dane są za duże.', 413);
    if (e instanceof SyntaxError) return blad('Niepoprawny format danych.');
    return blad('Błąd serwera. Spróbuj ponownie.', 500);
  }
}

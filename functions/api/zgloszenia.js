import { json, brakBazy, bramka, csrfOk, ip, licznik } from '../_lib.js';
const tnij = (v, n) => String(v == null ? '' : v).slice(0, n);
/* POST /api/zgloszenia — zapytanie z formularza lub zapis do newslettera (publiczne, z limitem) */
export async function onRequestPost({ request, env }) {
  const b = brakBazy(env); if (b) return b;
  if (!csrfOk(request)) return json({ blad: 'Żądanie odrzucone.' }, 403);
  const lim = await licznik(env, 'form:' + ip(request), 8, 3600);
  if (lim.zaDuzo) return json({ blad: 'Zbyt wiele zgłoszeń z tego adresu. Proszę spróbować później.' }, 429);
  let d = {}; try { d = await request.json(); } catch (e) { return json({ blad: 'Nieprawidłowe dane.' }, 400); }
  if (d.website || +d.czas < 3000) return json({ ok: true }); /* bot — udajemy sukces */
  if (!/^[^\s@]+@[^\s@]+\.[A-Za-z]{2,}$/.test(String(d.email || ''))) return json({ blad: 'Nieprawidłowy adres e-mail.' }, 400);
  const typ = ['termin', 'pytanie', 'newsletter'].includes(d.typ) ? d.typ : 'pytanie';
  const z = { typ, data: new Date().toISOString(), email: tnij(d.email, 200), imie: tnij(d.imie, 120), telefon: tnij(d.telefon, 30), jezyk: tnij(d.jezyk, 60), forma: tnij(d.forma, 120), termin: tnij(d.termin, 300), wiadomosc: tnij(d.wiadomosc, 4000), lang: tnij(d.lang, 5) };
  const id = 'zgl:' + (typ === 'newsletter' ? 'n' : 'z') + ':' + Date.now() + '-' + crypto.randomUUID().slice(0, 6);
  await env.TRESCI.put(id, JSON.stringify(z));
  await lim.dodaj();
  return json({ ok: true });
}
/* GET /api/zgloszenia — lista zgłoszeń (po zalogowaniu) */
export async function onRequestGet({ request, env }) {
  const b = await bramka(request, env); if (b) return b;
  const keys = (await env.TRESCI.list({ prefix: 'zgl:' })).keys.map((k) => k.name).sort().reverse().slice(0, 300);
  const out = [];
  for (const k of keys) { const v = await env.TRESCI.get(k, 'json'); if (v) out.push({ id: k, ...v }); }
  return json({ zgloszenia: out });
}
/* DELETE /api/zgloszenia?id=… — usunięcie zgłoszenia (po zalogowaniu) */
export async function onRequestDelete({ request, env }) {
  const b = await bramka(request, env); if (b) return b;
  const id = new URL(request.url).searchParams.get('id') || '';
  if (!/^zgl:/.test(id)) return json({ blad: 'Nieprawidłowy identyfikator.' }, 400);
  await env.TRESCI.delete(id);
  return json({ ok: true });
}

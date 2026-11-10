/* TALQO — wspólne funkcje API (Cloudflare Pages Functions)
   Powiązanie KV: TRESCI · zmienne: ADMIN_PASSWORD_HASH, SESSION_SECRET */
const enc = new TextEncoder();
export const json = (o, status = 200, headers = {}) =>
  new Response(JSON.stringify(o), { status, headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store', ...headers } });

export function brakBazy(env) {
  if (!env.TRESCI) return json({ blad: 'Baza danych nie jest podłączona. W Cloudflare Pages dodaj powiązanie KV o nazwie TRESCI.', tryb: 'brak-bazy' }, 503);
  return null;
}
const b64 = (u8) => btoa(String.fromCharCode(...u8)).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
const unb64 = (s) => Uint8Array.from(atob(s.replace(/-/g, '+').replace(/_/g, '/')), (c) => c.charCodeAt(0));

/* PBKDF2-SHA256 z solą; zapis: pbkdf2$iteracje$sol$hash */
export async function hashHasla(haslo, salt = crypto.getRandomValues(new Uint8Array(16)), iter = 100000) {
  const key = await crypto.subtle.importKey('raw', enc.encode(haslo), 'PBKDF2', false, ['deriveBits']);
  const bits = await crypto.subtle.deriveBits({ name: 'PBKDF2', hash: 'SHA-256', salt, iterations: iter }, key, 256);
  return `pbkdf2$${iter}$${b64(salt)}$${b64(new Uint8Array(bits))}`;
}
function rowne(a, b) { if (a.length !== b.length) return false; let r = 0; for (let i = 0; i < a.length; i++) r |= a.charCodeAt(i) ^ b.charCodeAt(i); return r === 0; }
export async function sprawdzHaslo(haslo, zapis) {
  const p = String(zapis || '').trim().split('$');
  if (p.length !== 4 || p[0] !== 'pbkdf2') return false;
  try { return rowne(await hashHasla(haslo, unb64(p[2]), +p[1]), p.join('$')); } catch (e) { return false; }
}
export async function aktualnyHash(env) {
  return (await env.TRESCI.get('auth:hash')) || env.ADMIN_PASSWORD_HASH || '';
}
async function hmac(secret, msg) {
  const key = await crypto.subtle.importKey('raw', enc.encode(secret), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']);
  return b64(new Uint8Array(await crypto.subtle.sign('HMAC', key, enc.encode(msg))));
}
const CIASTKO = 'talqo_sesja';
export const SESJA_S = 8 * 3600;
/* Sesja: podpisany znacznik ważny 8 h; zmiana hasła unieważnia wszystkie wcześniejsze sesje */
export async function ciastkoSesji(env) {
  const body = `${Date.now() + SESJA_S * 1000}.${b64(crypto.getRandomValues(new Uint8Array(12)))}`;
  const sig = await hmac(env.SESSION_SECRET, body + '.' + (await aktualnyHash(env)));
  return `${CIASTKO}=${body}.${sig}; Path=/; HttpOnly; Secure; SameSite=Strict; Max-Age=${SESJA_S}`;
}
export const ciastkoWyloguj = `${CIASTKO}=; Path=/; HttpOnly; Secure; SameSite=Strict; Max-Age=0`;
export async function zalogowany(request, env) {
  if (!env.SESSION_SECRET || !env.TRESCI) return false;
  const m = (request.headers.get('cookie') || '').match(new RegExp('(?:^|;\\s*)' + CIASTKO + '=([^;]+)'));
  if (!m) return false;
  const p = m[1].split('.');
  if (p.length !== 3 || !(+p[0] > Date.now())) return false;
  return rowne(await hmac(env.SESSION_SECRET, p[0] + '.' + p[1] + '.' + (await aktualnyHash(env))), p[2]);
}
/* Ochrona przed CSRF: własny nagłówek + zgodność pochodzenia */
export function csrfOk(request) {
  if (request.headers.get('x-talqo-panel') !== '1') return false;
  const o = request.headers.get('origin');
  return !o || o === new URL(request.url).origin;
}
/* Wspólna bramka dla operacji wymagających zalogowania */
export async function bramka(request, env) {
  const b = brakBazy(env); if (b) return b;
  if (!csrfOk(request)) return json({ blad: 'Żądanie odrzucone (brak nagłówka bezpieczeństwa).' }, 403);
  if (!(await zalogowany(request, env))) return json({ blad: 'Sesja wygasła. Proszę zalogować się ponownie.' }, 401);
  return null;
}
export const ip = (request) => request.headers.get('cf-connecting-ip') || 'lokalny';
export async function licznik(env, klucz, limit, ttl) {
  const n = +(await env.TRESCI.get(klucz)) || 0;
  return { n, zaDuzo: n >= limit, dodaj: () => env.TRESCI.put(klucz, String(n + 1), { expirationTtl: ttl }), zeruj: () => env.TRESCI.delete(klucz) };
}

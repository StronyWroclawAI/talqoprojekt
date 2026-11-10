import { json, bramka, sprawdzHaslo, aktualnyHash, hashHasla, ciastkoSesji, ip, licznik } from '../_lib.js';
/* POST /api/haslo — zmiana hasła; nowy hash zapisuje się w KV i od razu obowiązuje */
export async function onRequestPost({ request, env }) {
  const b = await bramka(request, env); if (b) return b;
  let d = {}; try { d = await request.json(); } catch (e) { }
  const lim = await licznik(env, 'proby-h:' + ip(request), 5, 900);
  if (lim.zaDuzo) return json({ blad: 'Zbyt wiele prób. Proszę spróbować za 15 minut.' }, 429);
  if (!(await sprawdzHaslo(String(d.obecne || ''), await aktualnyHash(env)))) { await lim.dodaj(); return json({ blad: 'Obecne hasło jest nieprawidłowe.' }, 401); }
  const nowe = String(d.nowe || '');
  if (nowe.length < 10) return json({ blad: 'Nowe hasło musi mieć co najmniej 10 znaków.' }, 400);
  await env.TRESCI.put('auth:hash', await hashHasla(nowe));
  await lim.zeruj();
  return json({ ok: true }, 200, { 'set-cookie': await ciastkoSesji(env) });
}

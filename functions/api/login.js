import { json, brakBazy, csrfOk, sprawdzHaslo, aktualnyHash, ciastkoSesji, ip, licznik } from '../_lib.js';
/* POST /api/login — logowanie; limit 5 nieudanych prób na 15 minut */
export async function onRequestPost({ request, env }) {
  const b = brakBazy(env); if (b) return b;
  if (!csrfOk(request)) return json({ blad: 'Żądanie odrzucone.' }, 403);
  if (!env.SESSION_SECRET) return json({ blad: 'Brak zmiennej SESSION_SECRET w ustawieniach Cloudflare Pages.' }, 500);
  const hash = await aktualnyHash(env);
  if (!hash) return json({ blad: 'Brak zmiennej ADMIN_PASSWORD_HASH w ustawieniach Cloudflare Pages.' }, 500);
  const lim = await licznik(env, 'proby:' + ip(request), 5, 900);
  if (lim.zaDuzo) return json({ blad: 'Zbyt wiele nieudanych prób. Proszę spróbować ponownie za 15 minut.' }, 429);
  let d = {}; try { d = await request.json(); } catch (e) { }
  if (!(await sprawdzHaslo(String(d.haslo || ''), hash))) {
    await lim.dodaj();
    return json({ blad: 'Nieprawidłowe hasło.', pozostalo: Math.max(0, 4 - lim.n) }, 401);
  }
  await lim.zeruj();
  return json({ ok: true }, 200, { 'set-cookie': await ciastkoSesji(env) });
}

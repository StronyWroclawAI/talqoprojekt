import { json, brakBazy, bramka } from '../_lib.js';
/* GET /api/tresci — publiczny odczyt treści strony */
export async function onRequestGet({ env }) {
  const b = brakBazy(env); if (b) return b;
  return json({ tresci: await env.TRESCI.get('tresci', 'json') });
}
/* PUT /api/tresci — zapis (po zalogowaniu) + automatyczna kopia 10 ostatnich zapisów */
export async function onRequestPut({ request, env }) {
  const b = await bramka(request, env); if (b) return b;
  let d; try { d = await request.json(); } catch (e) { return json({ blad: 'Nieprawidłowe dane.' }, 400); }
  if (!d || typeof d.tresci !== 'object' || !d.tresci || !Array.isArray(d.tresci.sekcje)) return json({ blad: 'To nie są treści tej strony.' }, 400);
  const txt = JSON.stringify(d.tresci);
  if (txt.length > 20 * 1024 * 1024) return json({ blad: 'Dane są zbyt duże. Zdjęcia proszę wgrywać przyciskiem „Wgraj z dysku”.' }, 413);
  await env.TRESCI.put('tresci', txt);
  await env.TRESCI.put('kopia:' + new Date().toISOString(), txt);
  const l = (await env.TRESCI.list({ prefix: 'kopia:' })).keys.map((k) => k.name).sort();
  for (const k of l.slice(0, Math.max(0, l.length - 10))) await env.TRESCI.delete(k);
  return json({ ok: true });
}

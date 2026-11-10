import { json, bramka } from '../../_lib.js';
/* POST /api/kopie/przywroc — przywrócenie wybranej kopii */
export async function onRequestPost({ request, env }) {
  const b = await bramka(request, env); if (b) return b;
  let d = {}; try { d = await request.json(); } catch (e) { }
  if (!/^kopia:/.test(String(d.id || ''))) return json({ blad: 'Nieprawidłowa kopia.' }, 400);
  const txt = await env.TRESCI.get(d.id);
  if (!txt) return json({ blad: 'Ta kopia już nie istnieje.' }, 404);
  await env.TRESCI.put('tresci', txt);
  return json({ ok: true, tresci: JSON.parse(txt) });
}

import { json, bramka } from '../../_lib.js';
/* GET /api/kopie — lista automatycznych kopii (10 ostatnich zapisów) */
export async function onRequestGet({ request, env }) {
  const b = await bramka(request, env); if (b) return b;
  const l = (await env.TRESCI.list({ prefix: 'kopia:' })).keys.map((k) => k.name).sort().reverse();
  return json({ kopie: l.map((k) => ({ id: k, data: k.slice(6) })) });
}

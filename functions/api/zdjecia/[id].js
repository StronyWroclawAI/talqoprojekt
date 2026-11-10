import { brakBazy } from '../../_lib.js';
/* GET /api/zdjecia/<id> — serwowanie zdjęcia z KV z długim cache */
export async function onRequestGet({ params, env }) {
  const b = brakBazy(env); if (b) return b;
  const id = String(params.id || '');
  if (!/^[a-z0-9-]{6,40}$/.test(id)) return new Response('Nie znaleziono', { status: 404 });
  const r = await env.TRESCI.getWithMetadata('img:' + id, 'arrayBuffer');
  if (!r || !r.value) return new Response('Nie znaleziono', { status: 404 });
  return new Response(r.value, { headers: { 'content-type': (r.metadata && r.metadata.typ) || 'image/jpeg', 'cache-control': 'public, max-age=31536000, immutable', 'x-content-type-options': 'nosniff' } });
}

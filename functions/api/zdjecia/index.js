import { json, bramka } from '../../_lib.js';
/* POST /api/zdjecia — zdjęcie z panelu (zmniejszone w przeglądarce) zapisane w KV */
export async function onRequestPost({ request, env }) {
  const b = await bramka(request, env); if (b) return b;
  const typ = (request.headers.get('content-type') || '').split(';')[0];
  if (!/^image\/(jpeg|png|webp)$/.test(typ)) return json({ blad: 'Dozwolone są tylko zdjęcia JPEG, PNG lub WebP.' }, 415);
  const buf = await request.arrayBuffer();
  if (!buf.byteLength || buf.byteLength > 4 * 1024 * 1024) return json({ blad: 'Zdjęcie jest zbyt duże (limit 4 MB po zmniejszeniu).' }, 413);
  const id = Date.now().toString(36) + '-' + crypto.randomUUID().slice(0, 8);
  await env.TRESCI.put('img:' + id, buf, { metadata: { typ } });
  return json({ ok: true, url: '/api/zdjecia/' + id });
}

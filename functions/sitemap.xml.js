/* GET /sitemap.xml — mapa strony uwzględniająca tylko WŁĄCZONE wersje językowe (ustawiane w panelu) */
const STALE = ['pl', 'en', 'it'];
export async function onRequestGet({ request, env }) {
  let dom = new URL(request.url).origin, jez = STALE.map((kod) => ({ kod, wl: true }));
  try {
    const t = env.TRESCI && (await env.TRESCI.get('tresci', 'json'));
    if (t && t.ustawienia) {
      if (/^https?:\/\/[^\[\]]+$/.test(t.ustawienia.domena || '')) dom = t.ustawienia.domena.replace(/\/$/, '');
      if (Array.isArray(t.ustawienia.jezyki)) jez = t.ustawienia.jezyki;
    }
  } catch (e) { }
  const wl = jez.filter((j) => (j.wl || j.kod === 'pl') && STALE.includes(j.kod)).map((j) => j.kod);
  const adres = (k) => dom + (k === 'pl' ? '/' : '/' + k + '/');
  const alt = wl.length > 1 ? wl.map((k) => `    <xhtml:link rel="alternate" hreflang="${k}" href="${adres(k)}"/>`).join('\n') + `\n    <xhtml:link rel="alternate" hreflang="x-default" href="${adres('pl')}"/>\n` : '';
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n` +
    wl.map((k) => `  <url>\n    <loc>${adres(k)}</loc>\n${alt}    <changefreq>weekly</changefreq>\n  </url>`).join('\n') + '\n</urlset>\n';
  return new Response(xml, { headers: { 'content-type': 'application/xml; charset=utf-8', 'cache-control': 'public, max-age=3600' } });
}

# TALQO Szkoła językowa online — strona z panelem administracyjnym

Statyczna strona (HTML/CSS/JS, bez frameworków) na Cloudflare Pages. Treści z panelu zapisują się na serwerze
przez Pages Functions w Cloudflare KV.

## Co jest w paczce
- `index.html`, `en/index.html`, `it/index.html` — strona w trzech językach (treść jest w HTML — widoczna dla Google bez JavaScriptu)
- `assets/talqo.js` — dane początkowe → renderowanie → działanie strony → panel (ładowany z `defer`)
- `functions/` — API: `/api/tresci`, `/api/login`, `/api/logout`, `/api/haslo`, `/api/sesja`, `/api/zdjecia`, `/api/kopie`, `/api/kopie/przywroc`, `/api/zgloszenia` oraz dynamiczne `/sitemap.xml`
- `robots.txt`, `sitemap.xml`, `404.html`, `site.webmanifest`, favicony, `og-image.png`, `_routes.json`, `_headers`

## Wdrożenie na Cloudflare Pages (ok. 10 minut)
1. Wgraj zawartość paczki `talqo-github.zip` do repozytorium GitHub (pliki w katalogu głównym repozytorium).
2. Cloudflare → Workers & Pages → Create → Pages → Connect to Git → wybierz repozytorium.
   Build command: *(puste)*, Build output directory: `/`.
3. Utwórz bazę: Storage & Databases → KV → Create namespace, np. `talqo-tresci`.
4. Projekt Pages → Settings → Bindings → Add → KV namespace → **Variable name: `TRESCI`** → wybierz utworzoną bazę.
5. Wygeneruj hash pierwszego hasła (na swoim komputerze, potrzebny Node.js 18+):
   `node tools/hash-hasla.mjs "TwojeHasloMin10Znakow"` (skrypt jest w paczce `talqo-zrodla.zip`).
6. Projekt Pages → Settings → Variables and Secrets → dodaj jako **Secret**:
   - `ADMIN_PASSWORD_HASH` — wynik z kroku 5 (cała linia zaczynająca się od `pbkdf2$…`),
   - `SESSION_SECRET` — losowy ciąg wypisany przez skrypt.
7. Deployments → Retry deployment (zmienne i powiązania działają od nowego wdrożenia).
8. Wejdź na stronę → kłódka w lewym dolnym rogu → zaloguj się → Ustawienia → „Zmiana hasła” (nowy hash zapisze się w KV).

Bez powiązania `TRESCI` strona działa normalnie, a panel przechodzi w **tryb demonstracyjny**
(zapis tylko w tej przeglądarce, hasło: `demo`).

## Domena
Adres domeny jest w jednym miejscu: `src/data.js`, stała `DOMENA` (teraz `https://[DOMENA]`).
Po zmianie uruchom `node build.js` — podmieni canonical, hreflang, Open Graph, JSON-LD, `robots.txt` i `sitemap.xml`.
Po wdrożeniu ten sam adres wpisz w panelu: Ustawienia → SEO i statystyki.

## Praca lokalna
```
npm install
node build.js                      # buduje dist/
node tools/serwer-lokalny.mjs      # http://localhost:8788 z działającym API, hasło: Talqo-test-123
node tools/serwer-lokalny.mjs --bez-bazy   # symulacja trybu demonstracyjnego
```

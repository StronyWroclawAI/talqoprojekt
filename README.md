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

## Zdjęcia i grafiki
- **Pierwszy ekran:** `img/hero-dawid-koloseum.webp` — kolaż wycięty z grafiki inspiracyjnej klientki (1068×724 px po powiększeniu).
  Jeśli klientka ma plik źródłowy w wyższej rozdzielczości, warto go podmienić w panelu: Wizerunek → Zdjęcia w nagłówku.
- **Flagi:** `flagi/gb.svg`, `de.svg`, `it.svg` — z projektu flag-icons (licencja MIT).
- **Pozostałe zdjęcia** są podlinkowane z banku Unsplash (licencja Unsplash — bezpłatne, także do użytku komercyjnego, bez obowiązku podpisu).
  Strona wczytuje je z `images.unsplash.com`. Dla pełnej niezależności można każde pobrać i wgrać w panelu przyciskiem „Wgraj z dysku”.

| Miejsce | Zdjęcie (autor, Unsplash) |
|---|---|
| Kurs angielski | Big Ben i czerwony autobus — Sung Jin Cho — photo-1742388958169-bf9948d3f268 |
| Kurs niemiecki | Brama Brandenburska — Xander Gonera — photo-1745878136928-d1b3c10afc35 |
| Kurs włoski | Espresso na stoliku — Alisa Anton — photo-1530174883092-c2a7aa3f1cfe |
| ONE | Laptop i notes — Bluestonex — photo-1759752393718-7b57f6da3caa |
| DUO | Dwie kobiety przy laptopie — Chidera Faustina Okeke — photo-1760351561007-526f5353cc76 |
| BUSINESS | Spotkanie w biurze — Vitaly Gariev — photo-1758691737543-09a1b2b715fa |
| EGZAMINY | Nauka przy biurku z książkami — Yanhao Fang — photo-1756032433560-56547efed550 |
| Metoda | Biurko z książką i laptopem — Yen Vu — photo-1769794371055-54436b54577e |
| O nas 1 | Kobieta przy laptopie — Vitaly Gariev — photo-1758876020491-9560594ec362 |
| O nas 2 | Notes z długopisem — Gabriel Cox — photo-1772396867158-e26d9e6256b2 |
| Journal: Londyn | Big Ben i panorama — Maik Winnecke — photo-1758818802493-225ca73fb3c2 |
| Journal: filmy | Klaps filmowy — Amjith S — photo-1730890754666-fbffee87d65b |
| Journal: kawa | Filiżanka na stoliku — Francesco Sancassani — photo-1517415465-a8f8ad47bea7 |
| Journal: niemiecki | Brama Brandenburska i wieża TV — Ansgar Scheffold — photo-1554072675-66db59dba46f |

## Treści przykładowe (do zastąpienia przed publikacją)
Ceny i pakiety, promocja „−50%”, opisy kadry i certyfikatów, zasady bezpieczeństwa, metody płatności, godziny kontaktu,
adres `kontakt@talqo.pl` i profile „talqo”, artykuły Journal oraz trzy opinie (oznaczone jako przykładowe).
Informację „Wersja demonstracyjna” w stopce wyłącza się w panelu: Ustawienia → SEO i statystyki.

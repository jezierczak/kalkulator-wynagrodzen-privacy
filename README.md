# Polityka prywatności – Mobilny kalkulator wynagrodzeń

Statyczna strona (pl / en / uk / ru) pod GitHub Pages. Bez budowania po stronie GitHuba.
Adres do Play Console (Treść aplikacji → Polityka prywatności): `https://<login>.github.io/<repo>/pl/`
(albo własna domena). Adresy `/en/`, `/uk/`, `/ru/` działają tak samo, a sam root przekierowuje wg języka przeglądarki.

## Przed publikacją
W `scripts/build.js` (góra pliku) uzupełnij `DEVELOPER` (imię i nazwisko albo nazwa firmy) oraz `EMAIL`,
potem `node scripts/build.js`. To dane administratora widoczne publicznie - wpisz tylko to, co chcesz pokazać.

## Zmiana treści
1. Edytuj `scripts/build.js` (teksty w czterech językach, stałe `DEVELOPER`, `EMAIL`, `UPDATED`).
2. `node scripts/build.js` generuje `pl/`, `en/`, `uk/`, `ru/`.
3. Zatwierdź i wypchnij na GitHub.

## Publikacja na GitHub Pages
```
git init
git add .
git commit -m "Polityka prywatności"
git branch -M main
git remote add origin https://github.com/<login>/<repo>.git
git push -u origin main
```
Potem na GitHubie: Settings → Pages → Deploy from a branch → `main` / `(root)`.
Własna domena: plik `CNAME` z samą nazwą domeny, rekord `CNAME` u rejestratora na `<login>.github.io`,
potem w Settings → Pages „Enforce HTTPS”.

## Zakres polityki (stan 2026-10-16)
Brak konta i własnego serwera. Dane lokalne w telefonie (zapisane kalkulacje, scenariusze, ustawienia, ostatnia tabela kursów NBP).
Zewnętrzne usługi: Google AdMob (reklamy, zgoda UMP, identyfikator reklamowy), Google Play (zakup Premium),
NBP `api.nbp.pl` (opcjonalnie, tylko Premium z włączoną opcją Waluty; publiczne kursy, bez danych użytkownika).

## Przy zmianach w aplikacji
Dodanie analityki, Crashlytics albo innej usługi sieciowej wymaga aktualizacji polityki
i deklaracji „Bezpieczeństwo danych” w Play Console.

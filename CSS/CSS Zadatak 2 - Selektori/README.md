## CSS Zadatak 2 | Selektori

_Prvo malo ponavljanja..._

1. Postavljeni `<nav>` element sadrži linkove na sadržaj stranice, no oni trenutno nisu u funkciji. Potrebno je promjeniti kod kako bi linkovi vodili na ispravne sekcije unutar web stranice.

2. Kreiraj `style.css` datoteku i poveži ju sa postojećom HTML datotekom.

3. Koristeći **jednostavne selektore** HTML elemenata:

   - promjeni **boju** svih `<h1>, <h2>, <h3>` naslova u `#317042` te ih **poravnaj na sredinu**.
   - promjeni **veličinu** svih `<h1>` elemenata na `48px`

4. Koristeći **kontekstualni selektor (razmak)** HTML elemenata:

   - svim `<p>` elementima koji se nalaze bilo gdje unutar `<main>` elementa promjeni **boju** u `darkolivegreen`

5. Koristeći **kontekstualne child selektore (`>`)** HTML elemenata:
   - sve `<span>` elemente unutar `<main>` elementa **podebljaj** te im promjeni **boju** u `rgb(31, 64, 40)`
   - svim `<p>` elementima koji su djeca `<section`> elemenata promjeni **veličinu** u `18px`
6. Koristeći **kontekstualne selektore** (adjacent sibling):

   - svim `<li>` elementima koji se nalaze uz drugi `<li>` element promjeni **boju pozadine** u `goldenrod`

7. Koristeći **selektore atributa id**:

   - na svim slikama koje se nalaze ispod naslova “Životopis” primjeni `border: 3px solid black`
   - drugom `<section>` elementu unutar `<main>` elementa dodjeli **boju pozadine** `#9fd4ad`
   - `<p>` elementu unutar `<aside>` elementa dodijeli `id=”spomendan”`, te pomoću istoga **podcrtaj** taj tekst

8. Svim `<p>` elementima unutar drugog `<section>` elementa prirodaj atribut `class=”legenda”`, te pomoću istoga promjeni `font-family` u `cursive`. U posljednjem od tih `<p>` elemenata u atribut `class` uz vrijednost `"legenda"` dodaj i vrijednost `drugiKraj`, te pomoću istoga promjeni **boju** teksta u `darkslategray`.

9. Koristeći pseudo-klase:

   - svakom `<p>` elementu koji je _posljednje dijete_ `<section>` elementa dodijeli **pozadinu sive boje**, te **crni obrub debljine** `3px`.
   - svakom `<img>` elementu koji je _prvo dijete_ `<section>` elementa dodaj `box-shadow: 10px 3px 12px darkorange`
   - _drugi po redu_ `<li>` element unutar `<ul>` elementa **podebljaj** na vrijednost `800`
   - _prvo slovo_ svakog `<p>` elementa **podebljaj** te mu promjeni **veličinu** na `24px`

10. Kreiraj CSS klasu `.vazno` sa sljedećim deklaracijama `font-weight: 800, color: red, font-style: italic`, te ju primjeni na prvi `<p>` HTML element ispod podnaslova "Štovanje"

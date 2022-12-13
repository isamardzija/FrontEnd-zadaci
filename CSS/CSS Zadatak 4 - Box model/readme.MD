1. Unutar `<header>` elementa kreiraj `<nav>` izbornik  koji treba imati poveznice na sva 3 `<h2>` elementa unutar dokumenta, kao i dvije vanjske poveznice na sljedeće URL-ove: `https://en.wikipedia.org/wiki/Frank_Sinatra` (Wikipedia) i `https://www.imdb.com/name/nm0000069/`(IMDB)
2. Importajte font `https://fonts.google.com/specimen/Source+Serif+Pro`u stilovima **Regular 400** i **Bold 700** u vaš dokument te ga **primjenite kao font** na sve elemente u vašem dokumentu.
3. Promjenite **veličinu** svih `<p>` elemenata na `16px` te im postavite `text-align: justify;`.
4. Sve naslove unutar dokumenta **podcrtajte** te ih **centrirajte**.
5. Na `<nav>` elementu kojeg ste napravili u koraku 1:
   - Kao **pozadinsku** boju primjenite `dimgrey`
   - Dodajte `padding` veličine `5px` na **vrhu i dnu** elementa
   - Debljinu fonta promjenite na `700`
   - Boju teksta svih anchor (link) elemenata unutar njega promjenite na `honeydew`
6. Na elementu `<article>`:
   - Kao **pozadinsku sliku** postavite sliku `hoboken.jpg`
   - Dodajte **obrub** `crne` boje debljine `2px`
   - Promjenite **boju teksta** svih `<p>` elemenata kojima je `<article>` roditelj u `bijelu`, **boju pozadine** u `rgb(128, 128, 128, 0.7)`, te im sa lijeve i desne strane postavite padding debljine `20px`
   - Svim `<img>` elementima koji se nalaze unutar njega postavite lijevu marginu `20px` te obrub sa sljedećim svojstvima: `border: 5px solid black;`
7. Koristeći pseudo-selektore:
   - svakom `<strong>` elementu koji je prvo dvijete svog roditelja promjeni **boju teksta** u `goldenrod` te **veličinu slova** na `20px`
   - svaki `<strong>` element koji je posljednje dijete svog roditelja **podcrtaj**
8. Svim `<section>` elementima unutar `<section>` elementa u kojemu je naslov "Životopis" dodjeli **boju pozadine** `rgb(207, 207, 207)` te `padding-inline: 5px` _(padding-inline je shorthand selektor koji istovremeno postavlja lijevi i desni padding)_
9. `<section>` elementu unutar kojega je naslov "Rano doba" dodijeli ID `ranoDoba`, te ga pomoću njega selektiraj u CSS-u i:
   - Promjeni mu **širinu** na `800px`
   - Dodaj mu **iscrtkani obrub** debljine `3px`, `crne` boje
   - Primjeni na njega marginu vrijednosti `auto` kako bi se centrirao na sredinu stranice
10. Koristeći _adjacent sibling_ selektor, odaberi sljedeći `<section>` element koji je "brat" `section#ranoDoba` elementa i:
    - Promjeni mu **širinu** na `800px`
    - **Centriraj ga** koristeći **margine** kao u zadatku 9.
    - Postavi **širinu** `<img>` elemenata koji se nalaze unutar njega na `100%`
11. Koristeći pseudo-selektor odaberi `<section>` element koji je 4. dijete svog parenta i:
    - Promjeni mu **širinu** na `600px`
    - **Podebljaj** mu tekst na vrijednost `700`
    - Postavi mu **desnu marginu** na nultu vrijednost, a lijevu na vrijednost `auto` kako bi se element pozicionirao u desnu stranu
12. Koristeći kombinaciju ID selektora i pseudo-selektora, ¸odaberi zadnji `<section>`i:
    - Postavi mu **širinu** na `500px` te ga **centriraj** pomoću margina
    - Za **sliku pozadine** postavi sliku `Frank_Sinatra_grave.jpg`
    - Prikaži cijelu pozadinsku sliku unutar elementa uz pomoć svojstva `background-size`
    - Uz pomoć svojstva `background-repeat` napravi da se pozadinska slika prikazuje samo jedan puta
    - Pozadinsku sliku postavi na **desnu stranu** elementa
    - Postavite **desni padding** elementa na vrijednost `100px`
13. Odaberi `<ul>` element unutar `<aside>` elementa i:
    - Za **boju pozadine** postavi `salmon`
    - Pomoću `padding` shorthand-a, postavi **gornji i donji padding** na `30px`, a **lijevi i desni padding** na `200px`
    - Svim `<li>` elementima koji su mu direktni potomci dodijeli **gornju marginu** `10px`
    - Svakom neparnom `<li>` elementu koji je dijete odabranog `<ul>` elementa **boju pozadine** postavi na `rgb(255, 77, 58)`

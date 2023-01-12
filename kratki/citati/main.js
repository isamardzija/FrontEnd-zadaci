citati = {
  citat1: {
    broj: 0,
    tekst:
      "Svijet se ne okreće zbog ljubavi, ali zbog ljubavi vrijedi putovati njime.",
    autor: "Franklin Jones",
  },
  citat2: {
    broj: 1,
    tekst: "Trebaš živjeti tako da sam sebe možeš poštivati.",
    autor: "Maksim Gorki",
  },
  citat3: {
    broj: 2,
    tekst: "Vrijeme teče daleko koliko i voda.",
    autor: "Konfucije",
  },
  citat4: {
    broj: 3,
    tekst: "Pjesma nikad nije završena, samo napuštena.",
    autor: "Paul Valery",
  },
  citat5: {
    broj: 4,
    tekst:
      "Zli vjeruju da su nam učinili veliko dobročinstvo ako vam ne nanose bol.",
    autor: "Ezop",
  },
  citat6: {
    broj: 5,
    tekst:
      "Kad god se nađete na strani većine, vrijeme je da zastanete i razmislite.",
    autor: "Mark Twain",
  },
};

citat = document.querySelector("#citat");
autor = document.querySelector("#autor");

odabir = Math.floor(Math.random() * 6);

citat.innerHTML = Object.values(citati)[odabir].tekst;
autor.innerHTML = Object.values(citati)[odabir].autor;

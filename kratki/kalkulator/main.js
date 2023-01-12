sveTipke = document.querySelectorAll(".tipka");
prvi = document.querySelector("#prvi");
drugi = document.querySelector("#drugi");
rezultat = document.querySelector("#rezultat");

sveTipke.forEach((tipka) => {
  tipka.addEventListener("click", () => {
    if (isNaN(prvi.valueAsNumber) || isNaN(drugi.valueAsNumber)) {
      rezultat.value = "Nešto nije u redu...";
    } else {
      if (tipka.id === "zbrajanje") {
        rezultat.value = prvi.valueAsNumber + drugi.valueAsNumber;
      }
      if (tipka.id === "oduzimanje") {
        rezultat.value = prvi.valueAsNumber - drugi.valueAsNumber;
      }
      if (tipka.id === "mnozenje") {
        rezultat.value = prvi.valueAsNumber * drugi.valueAsNumber;
      }
      if (tipka.id === "dijeljenje") {
        rezultat.value = prvi.valueAsNumber / drugi.valueAsNumber;
      }
    }
  });
});

export function cambiarRunas(campeon) {
  const $maestrias = document.querySelectorAll(".masteries");

  for (let i = 0; i < $maestrias.length; i++) {
    let maestrias = $maestrias[i].children,
      runasChamp = campeon.mastery[i] - 1;

    for (let j = 0; j < maestrias.length; j++) {
      maestrias[j].classList.remove("masterie__active");
    }
    if (maestrias.item(runasChamp) === null) {
      continue;
    } else {
      maestrias.item(runasChamp).classList.add("masterie__active");
    }
  }
}

export function cambiarMaestrias(campeon, runes) {
  const $maestrias = document.querySelectorAll(
      ".primary__tree--keystone .masterie"
    ),
    $secMaestrias = document.querySelectorAll(".rune__tree--v2 .masterie");

  for (let i = 0; i < runes.length; i++) {
    if (runes[i].nombre === campeon.arbol[0]) {
      let primArbol = runes[i].nombre,
        primMastery = runes[i].maestrias;

      if (
        primArbol !== "Precision" &&
        $maestrias[0].classList.contains("fake")
      ) {
        $maestrias[0].classList.add("fake-none");
        $maestrias[2].classList.add("margin-child");

        for (let x = 1; x < primMastery.length; x++) {
          $maestrias[x].firstElementChild.setAttribute("src", primMastery[x]);
        }
      } else if (
        $maestrias[0].classList.contains("fake-none") &&
        primArbol === "Precision"
      ) {
        $maestrias[0].classList.remove("fake-none");
        $maestrias[2].classList.remove("margin-child");

        for (let x = 0; x < primMastery.length; x++) {
          $maestrias[x].firstElementChild.setAttribute("src", primMastery[x]);
        }
      }
    }

    if (runes[i].nombre === campeon.arbol[1]) {
      let secMastery = runes[i].maestrias;

      if (
        runes[i].nombre !== "Domination" &&
        $secMaestrias[9].classList.contains("fake-none")
      ) {
        for (let x = 4; x < secMastery.length; x++) {
          $secMaestrias[x - 4].firstElementChild.setAttribute(
            "src",
            secMastery[x]
          );
        }
      } else if (
        runes[i].nombre !== "Domination" &&
        !$secMaestrias[9].classList.contains("fake-none")
      ) {
        $secMaestrias[9].classList.add("fake-none");
        for (let x = 4; x < secMastery.length; x++) {
          $secMaestrias[x - 4].firstElementChild.setAttribute(
            "src",
            secMastery[x]
          );
        }
      }
      if (
        runes[i].nombre === "Domination" &&
        $secMaestrias[9].classList.contains("fake-none")
      ) {
        $secMaestrias[9].classList.remove("fake-none");
        for (let x = 4; x < secMastery.length; x++) {
          $secMaestrias[x - 4].firstElementChild.setAttribute(
            "src",
            secMastery[x]
          );
        }
      }
    }
  }
}

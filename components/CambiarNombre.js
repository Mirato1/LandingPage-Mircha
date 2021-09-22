import api from "../helpers/lol_api.js";
import { ajax } from "../helpers/ajax.js";

export function cambiarNombre(campeon) {
  const $champAbilities = document.querySelectorAll(
      ".champion__header--abilities .champion__skill--label"
    ),
    $champH2 = document.querySelector(".champion__header--content h2"),
    $champH4 = document.querySelector(".champion__header--content h4"),
    $champImg = document.querySelector(".champion__info--header img");

  $champH4.textContent = campeon.titulo;
  const champNick = campeon.nombre;

  ajax({
    url: `${api.DATACHAMP}${champNick}.json`,
    cbSuccess: (json) => {
      let arrSpells = json.data[`${champNick}`].spells,
        passive = json.data[`${champNick}`].passive.image.full,
        name = json.data[`${champNick}`].name,
        img = json.data[`${champNick}`].image.full;

      $champH2.textContent = name;
      $champImg.setAttribute("src", `${api.SQUARE}${img}`);

      for (let i = 0; i < 4; i++) {
        $champAbilities[i + 1].firstElementChild.setAttribute(
          "src",
          `${api.SPELL}${arrSpells[i].image.full}`
        );
      }
      $champAbilities[0].firstElementChild.setAttribute(
        "src",
        `${api.PASSIVE}${passive}`
      );
    },
  });
}

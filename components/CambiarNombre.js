import api from "../helpers/lol_api.js";
import { ajax } from "../helpers/ajax.js";

export function cambiarNombre(campeon) {
  const $champAbilities = document.querySelectorAll(
      ".champion__header--abilities .champion__skill--label"
    ),
    $champH2 = document.querySelector(".champion__header--content h2"),
    $champH4 = document.querySelector(".champion__header--content h4"),
    $champImg = document.querySelector(".champion__info--header img"),
    $tooltipH4 = document.querySelectorAll(".tooltip__text h4"),
    $tooltipSmall = document.querySelectorAll(".tooltip__text small"),
    $tooltipContent = document.querySelectorAll(".tooltip__text p");

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
        $tooltipH4[i + 1].textContent = `${arrSpells[i].name}`;
        $tooltipSmall[i].textContent = `${arrSpells[i].cooldownBurn}`;
        $tooltipContent[i + 1].textContent = `${arrSpells[i].description}`;
      }

      $champAbilities[0].firstElementChild.setAttribute(
        "src",
        `${api.PASSIVE}${passive}`
      );
      $tooltipH4[0].textContent = `${json.data[`${champNick}`].passive.name}`;
      $tooltipContent[0].textContent = `${
        json.data[`${champNick}`].passive.description
      }`;
    },
  });
}

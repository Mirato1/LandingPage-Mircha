import { ajax } from "../helpers/ajax.js";

export function cambiarSpells(campeon) {
  const $champSpells = document.querySelectorAll(".spells__container div "),
    $champItems = document.querySelectorAll(".build__container img"),
    SUMM = "http://ddragon.leagueoflegends.com/cdn/11.19.1/img/spell/",
    $tooltipH4 = document.querySelectorAll(
      ".spells__container .tooltip__text h4"
    ),
    $tooltipContent = document.querySelectorAll(
      ".spells__container .tooltip__text p"
    );

  ajax({
    url: "https://ddragon.leagueoflegends.com/cdn/11.19.1/data/en_US/summoner.json",
    cbSuccess: (json) => {
      $tooltipH4[0].textContent = json["data"][campeon.summoners.sum_1].name;
      $tooltipContent[0].textContent =
        json["data"][campeon.summoners.sum_1].description;

      $tooltipH4[1].textContent = json["data"][campeon.summoners.sum_2].name;
      $tooltipContent[1].textContent =
        json["data"][campeon.summoners.sum_2].description;
    },
  });

  $champSpells[0].firstElementChild.setAttribute(
    "src",
    `${SUMM}${campeon.summoners.sum_1}.png`
  );
  $champSpells[0].firstElementChild.setAttribute(
    "alt",
    `${campeon.summoners.sum_1}`
  );
  $champSpells[1].firstElementChild.setAttribute(
    "src",
    `${SUMM}${campeon.summoners.sum_2}.png`
  );
  $champSpells[1].firstElementChild.setAttribute(
    "alt",
    `${campeon.summoners.sum_2}`
  );

  for (let i = 0; i < $champItems.length; i++) {
    $champItems[i].setAttribute("src", `assets/Items/${campeon.items[i]}`);
    $champItems[i].setAttribute("alt", `${campeon.items[i]}`);
  }
}

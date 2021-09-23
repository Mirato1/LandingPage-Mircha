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

  console.log($tooltipH4, $tooltipContent);
  ajax({
    url: "https://ddragon.leagueoflegends.com/cdn/11.19.1/data/en_US/summoner.json",
    cbSuccess: (json) => {
      console.log(json["data"][campeon.summoners.sum_1]);
      console.log(json["data"][campeon.summoners.sum_2]);
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

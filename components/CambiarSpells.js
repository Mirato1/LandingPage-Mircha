export function cambiarSpells(campeon) {
  const $champSpells = document.querySelector(".spells__container"),
    $champItems = document.querySelectorAll(".build__container img"),
    SUMM = "http://ddragon.leagueoflegends.com/cdn/11.19.1/img/spell/";

  $champSpells.firstElementChild.setAttribute(
    "src",
    `${SUMM}${campeon.summoners.sum_1}`
  );
  $champSpells.lastElementChild.setAttribute(
    "src",
    `${SUMM}${campeon.summoners.sum_2}`
  );

  for (let i = 0; i < $champItems.length; i++) {
    $champItems[i].setAttribute("src", `assets/Items/${campeon.items[i]}`);
    $champItems[i].setAttribute("alt", `${campeon.items[i]}`);
  }
}

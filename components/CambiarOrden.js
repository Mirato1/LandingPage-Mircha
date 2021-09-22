import api from "../helpers/lol_api.js";
import { ajax } from "../helpers/ajax.js";

export async function cambiarOrden(campeon) {
  const $orderPhoto = document.querySelectorAll(".skill__path--container img");
  const champNick = campeon.nombre;

  ajax({
    url: `${api.DATACHAMP}${champNick}.json`,
    cbSuccess: (res) => {
      let arrSpells = res.data[`${champNick}`].spells,
        passive = res.data[`${champNick}`].passive.image.full;
      for (let i = 0; i < 4; i++) {
        $orderPhoto[i].setAttribute(
          "src",
          `${api.SPELL}${arrSpells[i].image.full}`
        );
      }
      $orderPhoto[4].setAttribute("src", `${api.PASSIVE}${passive}`);
    },
  });
}

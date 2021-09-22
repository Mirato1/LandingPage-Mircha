import api from "../helpers/lol_api.js";
import { ajax } from "../helpers/ajax.js";

export function MyData() {
  let win = document.querySelector(".win"),
    losses = document.querySelector(".losses"),
    lp = document.querySelector(".lp");

  ajax({
    url: `${api.TOTALAPI}`,
    cbSuccess: (rankJson) => {
      win.textContent = `${rankJson[0].wins} V`;
      losses.textContent = `${rankJson[0].losses} D`;
      lp.textContent = `${rankJson[0].leaguePoints} LP`;
    },
  });
}

import api from "../helpers/lol_api.js";
import { ajax } from "../helpers/ajax.js";

export function cambiarMaestrias(campeon, runes) {
  const $secArbol = document.querySelectorAll(".rune__tree--v2 .masterie"),
    $primerArbol = document.querySelectorAll(
      ".primary__tree--keystone .masterie"
    );
  ajax({
    url: api.RUNESKEY,
    cbSuccess: (res) => {
      let primerArbol = res.find((el) => el.key === campeon.arbol[0]).slots,
        segundoArbol = res.find((el) => el.key === campeon.arbol[1]).slots;

      let totalPrim = [],
        totalSeg = [];

      primerArbol.map((el) => {
        totalPrim.push(el.runes);
      });
      segundoArbol.map((el) => {
        totalSeg.push(el.runes);
      });

      let primerRuna = [],
        segundaRuna = [];

      totalPrim.map((el) => {
        for (let i = 0; i < el.length; i++) {
          primerRuna.push(el[i]);
        }
      });
      totalSeg.map((el) => {
        for (let i = 0; i < el.length; i++) {
          segundaRuna.push(el[i]);
        }
      });

      for (let i = 0; i < $primerArbol.length; i++) {
        if (primerRuna.length > 12) {
          $primerArbol[0].classList.remove("fake-none");
          $primerArbol[2].classList.remove("margin-child");
          $primerArbol[i].firstElementChild.setAttribute(
            "src",
            `${api.KEYSTONE}${primerRuna[i].icon}`
          );
          $primerArbol[i].lastElementChild.firstElementChild.textContent =
            primerRuna[i].name;
          $primerArbol[i].lastElementChild.lastElementChild.innerHTML =
            primerRuna[i].longDesc;
        } else if (
          $primerArbol[0].classList.contains("fake") &&
          primerRuna.length <= 12
        ) {
          $primerArbol[0].classList.add("fake-none");
          $primerArbol[2].classList.add("margin-child");
          if ($primerArbol[i + 1] === undefined) {
            continue;
          } else {
            $primerArbol[i + 1].firstElementChild.setAttribute(
              "src",
              `${api.KEYSTONE}${primerRuna[i].icon}`
            );
            $primerArbol[i + 1].lastElementChild.firstElementChild.textContent =
              primerRuna[i].name;
            $primerArbol[i + 1].lastElementChild.lastElementChild.innerHTML =
              primerRuna[i].longDesc;
          }
        }
      }
      for (let i = 0; i < $secArbol.length; i++) {
        if (segundaRuna.length > 13) {
          $secArbol[9].classList.remove("fake-none");
          $secArbol[i].firstElementChild.setAttribute(
            "src",
            `${api.KEYSTONE}${segundaRuna[i + 4].icon}`
          );
          $secArbol[i].lastElementChild.firstElementChild.textContent =
            segundaRuna[i + 4].name;
          $secArbol[i].lastElementChild.lastElementChild.innerHTML =
            segundaRuna[i + 4].longDesc;
        } else if (
          segundaRuna.length < 13 &&
          $secArbol[9].classList.contains("fake-none")
        ) {
          if (segundaRuna[i + 3] === undefined) {
            continue;
          } else {
            $secArbol[i].firstElementChild.setAttribute(
              "src",
              `${api.KEYSTONE}${segundaRuna[i + 3].icon}`
            );
            $secArbol[i].lastElementChild.firstElementChild.textContent =
              segundaRuna[i + 3].name;
            $secArbol[i].lastElementChild.lastElementChild.innerHTML =
              segundaRuna[i + 3].longDesc;
          }
        } else if (
          segundaRuna.length < 13 &&
          !$secArbol[9].classList.contains("fake-none")
        ) {
          $secArbol[9].classList.add("fake-none");
          $secArbol[i].firstElementChild.setAttribute(
            "src",
            `${api.KEYSTONE}${segundaRuna[i + 3].icon}`
          );
          $secArbol[i].lastElementChild.firstElementChild.textContent =
            segundaRuna[i + 3].name;
          $secArbol[i].lastElementChild.lastElementChild.innerHTML =
            segundaRuna[i + 3].longDesc;
        }
      }
    },
  });
}

import api from "../helpers/lol_api.js";
import { ajax } from "../helpers/ajax.js";
import champs from "../helpers/champs_runes.js";

export function Cards() {
  let campeon = champs.champions;
  const apiChamps = api.DATACHAMP;
  const imgAPI = api.SQUARE;

  //   Crear un array con los champNick de objetos para poder ordenarlos
  let nombres = [],
    titulos = [];

  for (let i = 0; i < campeon.length; i++) {
    nombres.push(campeon[i].nombre);
    titulos.push([campeon[i].nombre, campeon[i].titulo]);
  }
  // Ordenar los nombres alfabeticamente
  nombres = nombres.sort();
  titulos = titulos.sort();

  async function cartas() {
    for (let i = 0; i < nombres.length; i++) {
      await ajax({
        url: `${apiChamps}${nombres[i]}.json`,
        cbSuccess: (campeones) => {
          let champsNick = campeones.data,
            champs = Object.values(champsNick);
          const $parent = document.querySelector("#champs__section"),
            $fragment = document.createDocumentFragment();
          //  Dependiendo la cantidad de nombres que tenga se hace TODO esto
          for (let i = 0; i < nombres.length; i++) {
            //  Crear cards dinámicamente según el champ que tengo como objeto
            let champ = champs.filter((el) => el.id === nombres[i]);
            for (const el of champ) {
              const $newCard = document.createElement("a"),
                $article = document.createElement("article"),
                $img = document.createElement("img"),
                $h3 = document.createElement("h3"),
                $p = document.createElement("p");
              $newCard.setAttribute("href", "#runas");
              $article.classList.add("champion__card");
              $article.setAttribute("id", el.id);
              $img.setAttribute("src", `${imgAPI}${el.image.full}`);
              $img.setAttribute("width", "120");
              $img.setAttribute("alt", `${el.name}`);
              $h3.textContent = `${el.name}`;
              $p.textContent = `${titulos[i][1]}`;
              $article.appendChild($img);
              $article.appendChild($h3);
              $article.appendChild($p);
              $newCard.appendChild($article);
              $fragment.appendChild($newCard);
            }
          }
          $parent.appendChild($fragment);
        },
      });
    }
  }
  cartas();
}

export function cambiarArbol(campeon) {
  const $champName = document.querySelector(".champion__runes--name"),
    $runeTree = document.querySelectorAll(".rune__tree--header");

  $champName.innerHTML = `Runas de ${campeon.nombre}`;

  for (let i = 0; i < $runeTree.length; i++) {
    $runeTree[i].firstElementChild.lastElementChild.setAttribute(
      "src",
      `assets/Runas/${campeon.arbol[i]}.png`
    );
    $runeTree[i].lastElementChild.innerHTML = `${campeon.arbol[i]}`;
  }
}

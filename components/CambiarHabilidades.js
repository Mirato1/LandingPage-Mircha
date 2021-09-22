export function cambiarHabilidades(campeon) {
  const $champPriority = document.querySelectorAll(
    ".skill__priority--path .champion__skill--label"
  );
  const $champWall = document.querySelector(".champion__info");

  $champWall.setAttribute(
    "style",
    `background-image: radial-gradient( 600px 230px at 60% 35%, rgb(0 0 0 / 10%) 0%, rgb(7 7 32) 100% ), linear-gradient(
90deg, rgb(11 11 28 / 61%) 0%, rgb(7 7 32 / 40%) 100%),
    url(assets/${campeon.nombre}_wall.jpg)`
  );
  for (let i = 0; i < $champPriority.length; i++) {
    $champPriority[i].children[0].setAttribute(
      "src",
      `assets/${campeon.nombre}/${campeon.nombre}${campeon.priority[i]}.png`
    );
    $champPriority[i].children[1].innerHTML = `${campeon.priority[i]}`;
  }
}

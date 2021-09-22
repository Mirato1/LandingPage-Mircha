export function cambiarSkills(campeon) {
  const $habilidades = document.querySelectorAll(".skill__order");

  for (let i = 0; i < 4; i++) {
    let campeonOrder = campeon.order[i],
      habilidadesRow = $habilidades[i].children;

    let maxSkill = campeonOrder.slice(-1)[0] - 1;

    for (let x = 0; x < habilidadesRow.length; x++) {
      habilidadesRow[x].classList.replace("skill__up", "no__skill--up");
      habilidadesRow[x].classList.replace("skill__up--max", "no__skill--up");
      habilidadesRow[x].innerText = "";
    }

    for (let j = 0; j < campeonOrder.length; j++) {
      let ordenSkill = campeonOrder[j] - 1;
      habilidadesRow[ordenSkill].classList.replace(
        "no__skill--up",
        "skill__up"
      );

      habilidadesRow[ordenSkill].innerText = `${campeonOrder[j]}`;

      habilidadesRow[maxSkill].classList.replace(
        "no__skill--up",
        "skill__up--max"
      );
      habilidadesRow[maxSkill].innerText = `${maxSkill + 1}`;
    }
  }
}

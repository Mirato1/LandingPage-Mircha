// MENÚ
((d) => {
  const $btnMenu = d.querySelector(".header__menu-btn"),
    $menu = d.querySelector(".nav__menu");

  $btnMenu.addEventListener("click", (e) => {
    $menu.classList.toggle("is-active");
    $btnMenu.classList.toggle("is-active");
  });

  d.addEventListener("click", (e) => {
    if (!e.target.matches(".nav__menu a")) return false;
    $menu.classList.remove("is-active");
    $btnMenu.classList.remove("is-active");
  });
})(document);

// Formulario de Contacto
((d) => {
  const $form = d.querySelector(".contact__form"),
    $loader = d.querySelector(".contact__form--loader"),
    $response = d.querySelector(".contact__form--response");

  $form.addEventListener("submit", (e) => {
    e.preventDefault();
    $loader.classList.remove("none");
    fetch("https://formsubmit.co/ajax/luquetti.5@hotmail.com", {
      method: "POST",
      body: new FormData(e.target),
    })
      .then((res) => (res.ok ? res.json() : Promise.reject(res)))
      .then((json) => {
        console.log(json);
        location.hash = "#gracias";
        $form.reset();
      })
      .catch((err) => {
        console.log(err);
        let message =
          err.statusText || "Ocurrió un error al enviar, intenta nuevamente.";
        $response.querySelector(
          "h3"
        ).innerHTML = `Error ${err.status} : ${message} `;
      })
      .finally(() => {
        $loader.classList.add("none");
        setTimeout(() => {
          location.hash = "#close";
        }, 3000);
      });
  });
})(document);

//DARK MODE
((d) => {
  // Si tiene el ID se realiza la función
  if (d.getElementById("dark-mode")) {
    d.getElementById("dark-mode").addEventListener("change", (e) => {
      d.documentElement.classList.toggle("dark-mode");
      let theme;
      if (d.documentElement.classList.contains("dark-mode")) {
        theme = "dark";
      } else {
        theme = "light";
      }
      localStorage.setItem("theme", theme);
    });

    //   Si en el local Storage el fondo es dark se agrega la clase sino no.
    if (localStorage.getItem("theme") === "dark") {
      d.documentElement.classList.add("dark-mode");
    } else {
      d.documentElement.classList.remove("dark-mode");
    }
  }
})(document);

//Interactividad Campeones
((d) => {
  d.addEventListener("DOMContentLoaded", (e) => {
    const champions = [
      {
        nombre: "Aatrox",
        titulo: "EL DEMONIO PAPÁ",
        summoners: {
          sum_1: "SummonerTeleport.png",
          sum_2: "SummonerFlash.png",
        },
        items: [
          "Goredrinker.png",
          "Sterakk.png",
          "DD.png",
          "GA.png",
          "Chemptank.png",
          "Tabis.png",
        ],
        priority: ["Q", "E", "W"],
        abilities: ["Q", "W", "E", "R", "_Passive"],
        arbol: ["Precision", "Resolve"],
        mastery: [4, 2, 2, 3, 0, 3, 2, 1, 1, 2],
        order: [
          [1, 4, 5, 7, 9],
          [3, 14, 15, 17, 18],
          [2, 8, 10, 12, 13],
          [6, 11, 16],
        ],
      },
      {
        nombre: "Akshan",
        titulo: "MACUMBERO",
        summoners: {
          sum_1: "SummonerTeleport.png",
          sum_2: "SummonerFlash.png",
        },
        items: [
          "Kraken.png",
          "Collector.png",
          "Infinity.png",
          "Dominik.png",
          "GA.png",
          "Berseker.png",
        ],
        priority: ["E", "Q", "W"],
        abilities: ["Q", "W", "E", "R", "_Passive"],
        arbol: ["Precision", "Resolve"],
        mastery: [1, 3, 3, 1, 3, 3, 0, 2, 1, 2],
        order: [
          [2, 8, 10, 12, 13],
          [3, 14, 15, 17, 18],
          [1, 4, 5, 7, 9],
          [6, 11, 16],
        ],
      },
      {
        nombre: "Sylas",
        titulo: "EL CHAMPION",
        summoners: {
          sum_1: "SummonerTeleport.png",
          sum_2: "SummonerFlash.png",
        },
        items: [
          "Everfrost.png",
          "Cosmic.png",
          "Zhonyas.png",
          "Deathcap.png",
          "Morello.png",
          "Ionia.png",
        ],
        priority: ["W", "Q", "E"],
        abilities: ["Q", "W", "E", "R", "_Passive"],
        arbol: ["Precision", "Inspiration"],
        mastery: [4, 3, 2, 3, 0, 3, 1, 1, 1, 2],
        order: [
          [3, 8, 10, 12, 13],
          [2, 4, 5, 7, 9],
          [1, 14, 15, 17, 18],
          [6, 11, 16],
        ],
      },
      {
        nombre: "Riven",
        titulo: "LA ROTA",
        summoners: {
          sum_1: "SummonerTeleport.png",
          sum_2: "SummonerFlash.png",
        },
        items: [
          "Goredrinker.png",
          "Black.png",
          "Sterakk.png",
          "DD.png",
          "GA.png",
          "Tabis.png",
        ],
        priority: ["Q", "E", "W"],
        abilities: ["Q", "W", "E", "R", "_Passive"],
        arbol: ["Precision", "Resolve"],
        mastery: [4, 2, 1, 3, 0, 3, 3, 1, 1, 2],
        order: [
          [1, 4, 5, 7, 9],
          [3, 14, 15, 17, 18],
          [2, 8, 10, 12, 13],
          [6, 11, 16],
        ],
      },
      {
        nombre: "Kled",
        titulo: "EL TILTEADO",
        summoners: {
          sum_1: "SummonerTeleport.png",
          sum_2: "SummonerFlash.png",
        },
        items: [
          "Goredrinker.png",
          "Sterakk.png",
          "Hydra.png",
          "DD.png",
          "GA.png",
          "Tabis.png",
        ],
        priority: ["Q", "W", "E"],
        abilities: ["Q", "W", "E", "R", "_Passive"],
        arbol: ["Precision", "Resolve"],
        mastery: [4, 2, 1, 3, 1, 3, 0, 2, 1, 2],
        order: [
          [1, 4, 5, 7, 9],
          [2, 8, 10, 12, 13],
          [3, 14, 15, 17, 18],
          [6, 11, 16],
        ],
      },
      {
        nombre: "Camille",
        titulo: "LA CYBORG",
        summoners: {
          sum_1: "SummonerTeleport.png",
          sum_2: "SummonerIgnite.png",
        },
        items: [
          "Sunderer.png",
          "Sterakk.png",
          "Hydra.png",
          "DD.png",
          "GA.png",
          "Tabis.png",
        ],
        priority: ["Q", "E", "W"],
        abilities: ["Q", "W", "E", "R", "_Passive"],
        arbol: ["Resolve", "Inspiration"],
        mastery: [2, 3, 3, 3, 0, 3, 1, 2, 1, 2],
        order: [
          [3, 4, 5, 7, 9],
          [1, 14, 15, 17, 18],
          [2, 8, 10, 12, 13],
          [6, 11, 16],
        ],
      },
      {
        nombre: "Akali",
        titulo: "LA NINJA",
        summoners: {
          sum_1: "SummonerTeleport.png",
          sum_2: "SummonerIgnite.png",
        },
        items: [
          "Protobelt.png",
          "Zhonyas.png",
          "Deathcap.png",
          "VoidStaff.png",
          "Morello.png",
          "Sorcerer.png",
        ],
        priority: ["Q", "E", "W"],
        abilities: ["Q", "W", "E", "R", "_Passive"],
        arbol: ["Precision", "Resolve"],
        mastery: [4, 3, 2, 3, 0, 3, 1, 1, 1, 2],
        order: [
          [1, 4, 5, 7, 9],
          [3, 14, 15, 17, 18],
          [2, 8, 10, 12, 13],
          [6, 11, 16],
        ],
      },
      {
        nombre: "Fiora",
        titulo: "LA FRANCESA",
        summoners: {
          sum_1: "SummonerTeleport.png",
          sum_2: "SummonerFlash.png",
        },
        items: [
          "Goredrinker.png",
          "Sterakk.png",
          "Reaver.png",
          "DD.png",
          "GA.png",
          "Tabis.png",
        ],
        priority: ["Q", "E", "W"],
        abilities: ["Q", "W", "E", "R", "_Passive"],
        arbol: ["Precision", "Inspiration"],
        mastery: [4, 3, 3, 3, 2, 3, 0, 2, 1, 2],
        order: [
          [1, 4, 5, 7, 9],
          [3, 14, 15, 17, 18],
          [2, 8, 10, 12, 13],
          [6, 11, 16],
        ],
      },
      {
        nombre: "Gwen",
        titulo: "LA MUÑECA",
        summoners: {
          sum_1: "SummonerTeleport.png",
          sum_2: "SummonerIgnite.png",
        },
        items: [
          "Riftmaker.png",
          "Cosmic.png",
          "Zhonyas.png",
          "Nashor.png",
          "Morello.png",
          "Ionia.png",
        ],
        priority: ["Q", "E", "W"],
        abilities: ["Q", "W", "E", "R", "_Passive"],
        arbol: ["Precision", "Resolve"],
        mastery: [4, 3, 1, 3, 0, 3, 3, 2, 1, 2],
        order: [
          [1, 4, 5, 7, 9],
          [3, 14, 15, 17, 18],
          [2, 8, 10, 12, 13],
          [6, 11, 16],
        ],
      },
      {
        nombre: "Jayce",
        titulo: "FACHERO SENDOH",
        summoners: {
          sum_1: "SummonerTeleport.png",
          sum_2: "SummonerFlash.png",
        },
        items: [
          "Eclipse.png",
          "Muramana.png",
          "Serpent.png",
          "Serylda.png",
          "GA.png",
          "Ionia.png",
        ],
        priority: ["Q", "W", "E"],
        abilities: ["Q", "W", "E", "R", "_Passive"],
        arbol: ["Precision", "Inspiration"],
        mastery: [4, 3, 1, 3, 2, 3, 0, 1, 1, 2],
        order: [
          [1, 3, 5, 7, 9, 11],
          [4, 6, 8, 10, 12, 13],
          [2, 14, 15, 16, 17, 18],
          [],
        ],
      },
      {
        nombre: "LeeSin",
        titulo: "EL CIEGO",
        summoners: {
          sum_1: "SummonerTeleport.png",
          sum_2: "SummonerFlash.png",
        },
        items: [
          "Goredrinker.png",
          "Sterakk.png",
          "DD.png",
          "GA.png",
          "Chemptank.png",
          "Tabis.png",
        ],
        priority: ["E", "Q", "W"],
        abilities: ["Q", "W", "E", "R", "_Passive"],
        arbol: ["Precision", "Resolve"],
        mastery: [4, 2, 2, 3, 0, 3, 2, 1, 1, 2],
        order: [
          [2, 8, 10, 12, 13],
          [3, 14, 15, 17, 18],
          [1, 4, 5, 7, 9],
          [6, 11, 16],
        ],
      },
      {
        nombre: "Vladimir",
        titulo: "EL VÁMPIRO",
        summoners: {
          sum_1: "SummonerTeleport.png",
          sum_2: "SummonerFlash.png",
        },
        items: [
          "Protobelt.png",
          "Cosmic.png",
          "Deathcap.png",
          "Zhonyas.png",
          "VoidStaff.png",
          "Sorcerer.png",
        ],
        priority: ["Q", "E", "W"],
        abilities: ["Q", "W", "E", "R", "_Passive"],
        arbol: ["Sorcery", "Inspiration"],
        mastery: [4, 3, 1, 3, 2, 0, 1, 3, 1, 1],
        order: [
          [1, 4, 5, 7, 9],
          [3, 14, 15, 17, 18],
          [2, 8, 10, 12, 13],
          [6, 11, 16],
        ],
      },
      {
        nombre: "Gangplank",
        titulo: "EL JACK SPARROW",
        summoners: {
          sum_1: "SummonerTeleport.png",
          sum_2: "SummonerFlash.png",
        },
        items: [
          "Shieldbow.png",
          "Reaver.png",
          "Collector.png",
          "Infinity.png",
          "Dominik.png",
          "Ionia.png",
        ],
        priority: ["Q", "E", "W"],
        abilities: ["Q", "W", "E", "R", "_Passive"],
        arbol: ["Resolve", "Inspiration"],
        mastery: [2, 1, 3, 1, 0, 3, 3, 1, 1, 2],
        order: [
          [1, 4, 5, 7, 9],
          [3, 14, 15, 17, 18],
          [2, 8, 10, 12, 13],
          [6, 11, 16],
        ],
      },
    ];

    createCards(champions);

    d.addEventListener("click", (e) => {
      let $card = e.target.closest(".champion__card");
      const runes = [
        {
          nombre: "Resolve",
          maestrias: [
            "",
            "assets/Runas/Grasp.png",
            "assets/Runas/After.png",
            "assets/Runas/Guardian.png",
            "assets/Runas/Demolish.png",
            "assets/Runas/FontOfLife.png",
            "assets/Runas/MirrorShell.png",
            "assets/Runas/Conditioning.png",
            "assets/Runas/SecondWind.png",
            "assets/Runas/BonePlating.png",
            "assets/Runas/Overgrowth.png",
            "assets/Runas/Revitalize.png",
            "assets/Runas/Unflinching.png",
          ],
        },
        {
          nombre: "Inspiration",
          maestrias: [
            "",
            "assets/Runas/PressTheAttack.png",
            "assets/Runas/LethalTempoTemp.png",
            "assets/Runas/FleetFootwork.png",
            "assets/Runas/Hexflash.png",
            "assets/Runas/Magical.png",
            "assets/Runas/Timing.png",
            "assets/Runas/Market.png",
            "assets/Runas/Minion.png",
            "assets/Runas/Biscuit.png",
            "assets/Runas/Insight.png",
            "assets/Runas/Velocity.png",
            "assets/Runas/Tonic.png",
          ],
        },
        {
          nombre: "Precision",
          maestrias: [
            "assets/Runas/PressTheAttack.png",
            "assets/Runas/LethalTempoTemp.png",
            "assets/Runas/FleetFootwork.png",
            "assets/Runas/Conqueror.png",
            "assets/Runas/Overheal.png",
            "assets/Runas/Triumph.png",
            "assets/Runas/PresenceOfMind.png",
            "assets/Runas/LegendAlacrity.png",
            "assets/Runas/LegendTenacity.png",
            "assets/Runas/LegendBloodline.png",
            "assets/Runas/CoupDeGrace.png",
            "assets/Runas/CutDown.png",
            "assets/Runas/LastStand.png",
          ],
        },
        {
          nombre: "Sorcery",
          maestrias: [
            "",
            "assets/Runas/Aery.png",
            "assets/Runas/Comet.png",
            "assets/Runas/PhaseRush.png",
            "assets/Runas/Orb.png",
            "assets/Runas/Manaflow.png",
            "assets/Runas/Nimbus.png",
            "assets/Runas/Transcendence.png",
            "assets/Runas/Celerity.png",
            "assets/Runas/Absolute.png",
            "assets/Runas/Scorch.png",
            "assets/Runas/Waterwalking.png",
            "assets/Runas/GatheringStorm.png",
          ],
        },
      ];

      if ($card) {
        let campeon = champions.find((el) => el.nombre === $card.id);

        cambiarNombre(campeon);
        cambiarSpells(campeon);
        cambiarHabilidades(campeon);
        cambiarFondo(campeon);
        cambiarOrden(campeon);
        cambiarArbol(campeon);
        cambiarMaestrias(campeon, runes);
        cambiarRunas(campeon);
        cambiarSkills(campeon);
        // carrousel();
        skins(campeon);
      }
    });
  });
})(document);

// Cambiar Prioridad de El Header Completo según el champ
function cambiarNombre(campeon) {
  const $champName = document.querySelector(".champion__info--header");

  $champName.innerHTML = `
  <img src="assets/${campeon.nombre}.png" alt="${campeon.nombre}">
  <div class="champion__header--content">
        <h2>${campeon.nombre.toUpperCase()}</h2>
        <h4>${campeon.titulo}</h4>
    </div>
    <div class="champion__header--abilities">
        <div class="champion__skill--label">
                <img src="assets/${campeon.nombre}/${
    campeon.nombre
  }_Passive.png" alt="${campeon.nombre} Passive">
                <div class="skill__label--key bottom-center">P</div>
                </div>
                            <div class="champion__skill--label">
                                <img src="assets/${campeon.nombre}/${
    campeon.nombre
  }Q.png" alt="${campeon.nombre} Q">
                                <div class="skill__label--key bottom-center">Q</div>
                            </div>
                            <div class="champion__skill--label">
                                <img src="assets/${campeon.nombre}/${
    campeon.nombre
  }W.png" alt="${campeon.nombre} W">
                                <div class="skill__label--key bottom-center">W</div>
                            </div>
                            <div class="champion__skill--label">
                                <img src="assets/${campeon.nombre}/${
    campeon.nombre
  }E.png" alt="${campeon.nombre} E">
                                <div class="skill__label--key bottom-center">E</div>
                            </div>
                            <div class="champion__skill--label">
                                <img src="assets/${campeon.nombre}/${
    campeon.nombre
  }R.png" alt="${campeon.nombre} R">
                                <div class="skill__label--key bottom-center">R</div>
                            </div>
                        </div>
  `;
}

// Cambiar Los Hechizos
function cambiarSpells(campeon) {
  const $champSpells = document.querySelector(".spells__container"),
    $champItems = document.querySelectorAll(".build__container img");

  $champSpells.firstElementChild.setAttribute(
    "src",
    `assets/${campeon.summoners.sum_1}`
  );
  $champSpells.lastElementChild.setAttribute(
    "src",
    `assets/${campeon.summoners.sum_2}`
  );

  for (let i = 0; i < $champItems.length; i++) {
    $champItems[i].setAttribute("src", `assets/Items/${campeon.items[i]}`);
    $champItems[i].setAttribute("alt", `${campeon.items[i]}`);
  }
}

// Cambiar Prioridad de Habilidades
function cambiarHabilidades(campeon) {
  const $champPriority = document.querySelectorAll(
    ".skill__priority--path .champion__skill--label"
  );

  for (let i = 0; i < $champPriority.length; i++) {
    $champPriority[i].children[0].setAttribute(
      "src",
      `assets/${campeon.nombre}/${campeon.nombre}${campeon.priority[i]}.png`
    );
    $champPriority[i].children[1].innerHTML = `${campeon.priority[i]}`;
  }
}

// Cambiar fondo
function cambiarFondo(campeon) {
  const $champWall = document.querySelector(".champion__info");

  $champWall.setAttribute(
    "style",
    `background-image: radial-gradient(
      400px 200px at 60% 34%,
      rgba(7, 7, 32, 0) 0%,
      rgb(7, 7, 32) 100%
    ),
    linear-gradient(90deg, rgb(7, 7, 32) 0%, rgba(7, 7, 32, 0.4) 100%),
    url(assets/${campeon.nombre}_wall.jpg)`
  );
}

// Orden Habilidades
function cambiarOrden(campeon) {
  const $orderPhoto = document.querySelectorAll(".skill__path--container img");

  for (let i = 0; i < $orderPhoto.length; i++) {
    $orderPhoto[i].setAttribute(
      "src",
      `assets/${campeon.nombre}/${campeon.nombre}${campeon.abilities[i]}.png`
    );
  }
}

//Cambiar Arbol
function cambiarArbol(campeon) {
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

// Cambiar Arbol Maestrias

function cambiarMaestrias(campeon, runes) {
  const $maestrias = document.querySelectorAll(
      ".primary__tree--keystone .masterie"
    ),
    $secMaestrias = document.querySelectorAll(".rune__tree--v2 .masterie");

  for (let i = 0; i < runes.length; i++) {
    if (runes[i].nombre === campeon.arbol[0]) {
      let primArbol = runes[i].nombre,
        primMastery = runes[i].maestrias;

      if (
        primArbol !== "Precision" &&
        $maestrias[0].classList.contains("fake")
      ) {
        $maestrias[0].classList.add("fake-none");
        $maestrias[2].classList.add("margin-child");

        for (let x = 1; x < primMastery.length; x++) {
          $maestrias[x].firstElementChild.setAttribute("src", primMastery[x]);
        }
      } else if (
        $maestrias[0].classList.contains("fake-none") &&
        primArbol === "Precision"
      ) {
        $maestrias[0].classList.remove("fake-none");
        $maestrias[2].classList.remove("margin-child");

        for (let x = 0; x < primMastery.length; x++) {
          $maestrias[x].firstElementChild.setAttribute("src", primMastery[x]);
        }
      }
    }

    if (runes[i].nombre === campeon.arbol[1]) {
      let secMastery = runes[i].maestrias;

      for (let x = 4; x < secMastery.length; x++) {
        $secMaestrias[x - 4].firstElementChild.setAttribute(
          "src",
          secMastery[x]
        );
      }
    }
  }
}

// Cambiar Runas según champ
function cambiarRunas(campeon) {
  const $maestrias = document.querySelectorAll(".masteries");

  for (let i = 0; i < $maestrias.length; i++) {
    let maestrias = $maestrias[i].children,
      runasChamp = campeon.mastery[i] - 1;

    for (let j = 0; j < maestrias.length; j++) {
      maestrias[j].classList.remove("masterie__active");
    }
    if (maestrias.item(runasChamp) === null) {
      continue;
    } else {
      maestrias.item(runasChamp).classList.add("masterie__active");
    }
  }
}

//  Cambiar leveleo de habilidades

function cambiarSkills(campeon) {
  const $habilidades = document.querySelectorAll(".skill__order");

  for (let i = 0; i < 4; i++) {
    let campeonOrder = campeon.order[i],
      habilidadesRow = $habilidades[i].children;

    let maxSkill = campeonOrder.pop() - 1;

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

// API RIOT

function createCards(campeon) {
  const apiChamps =
    "https://ddragon.leagueoflegends.com/cdn/11.18.1/data/en_US/champion/";

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

  for (let i = 0; i < nombres.length; i++) {
    fetch(`${apiChamps}${nombres[i]}.json`)
      .then((res) => (res.ok ? res.json() : Promise.reject(res)))

      .then((json) => {
        const imgAPI =
          "https://ddragon.leagueoflegends.com/cdn/11.18.1/img/champion/";
        let campeones = json.data,
          champs = Object.values(campeones);

        console.log(campeones);

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
      })
      .catch((err) => {
        console.log("Estamos en el catch", err);
      });
  }
}

function skins(campeon) {
  const $splashSection = document.querySelector(".carrousel__slides"),
    $fragment = document.createDocumentFragment();

  async function sliders(champNick) {
    try {
      const champNick = campeon.nombre;
      const champsAPI =
          "https://ddragon.leagueoflegends.com/cdn/11.18.1/data/en_US/champion/",
        splashAPI =
          "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/";

      let promise,
        campeonesData = [],
        skins = [],
        totalSkins = [],
        numNombre = [],
        skinsChamp = [];

      for (let i = 0; i < 1; i++) {
        promise = await fetch(`${champsAPI}${champNick}.json`);
        campeonesData.push(await promise.json());
      }

      for (let i = 0; i < campeonesData.length; i++) {
        skins = await campeonesData[i]["data"][`${champNick}`]["skins"];
        for (const key of skins) {
          totalSkins.push(Object.values(key));
        }
      }
      for (let i = 0; i < totalSkins.length; i++) {
        numNombre.push([totalSkins[i][2], totalSkins[i][1]]);
      }

      for (const key of numNombre) {
        let $slides = document.querySelectorAll(".carrousel__slide");
        if ($slides.length >= 1) {
          while (
            $splashSection.firstElementChild.classList.contains(
              "carrousel__slide"
            )
          ) {
            $splashSection.firstElementChild.remove();
          }
        } else {
          const $newSlide = document.createElement("div"),
            $img = document.createElement("img"),
            $h3 = document.createElement("h3");
          $newSlide.classList.add("carrousel__slide");
          $img.setAttribute("src", `${splashAPI}${champNick}_${key[1]}.jpg`);
          $h3.textContent = `${key[0]}`;
          $newSlide.appendChild($img);
          $newSlide.appendChild($h3);
          $fragment.appendChild($newSlide);
        }
      }

      $splashSection.prepend($fragment);
      $splashSection.firstElementChild.classList.add("active");

      const d = document;
      const $nextBtn = d.querySelector(".carrousel__btns .next"),
        $prevBtn = d.querySelector(".carrousel__btns .prev"),
        $slides = d.querySelectorAll(".carrousel__slide");

      let i = 0;

      d.addEventListener("click", (e) => {
        if (e.target === $prevBtn) {
          e.preventDefault();
          $slides[i].classList.remove("active");
          i--;

          if (i < 0) {
            i = $slides.length - 1;
          }

          $slides[i].classList.add("active");
        }
      });

      d.addEventListener("click", (e) => {
        if (e.target === $nextBtn) {
          e.preventDefault();
          $slides[i].classList.remove("active");
          i++;

          if (i >= $slides.length) {
            i = 0;
          }

          $slides[i].classList.add("active");
        }
      });
    } catch (err) {
      console.log(err);
    }
  }

  sliders(campeon);
}

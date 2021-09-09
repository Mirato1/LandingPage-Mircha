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

function flujoEventos(e) {}

((d) => {
  d.addEventListener("click", (e) => {
    let $card = e.target.closest(".champion__card");
    let champions = [
      {
        nombre: "Aatrox",
        titulo: "The Darking Blade",
        foto: "Aatrox.png",
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
      },
      {
        nombre: "Akshan",
        titulo: "The Rogue Sentinel",
        foto: "Akshan.png",
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
      },
      {
        nombre: "Sylas",
        titulo: "The Unshackled",
        foto: "Sylas.png",
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
      },
      {
        nombre: "Riven",
        titulo: "The Exile",
        foto: "Riven.png",
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
      },
      {
        nombre: "Kled",
        titulo: "The Cantankerous Cavalier",
        foto: "Kled.png",
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
      },
      {
        nombre: "Camille",
        titulo: "The Steel Shadow",
        foto: "Camille.png",
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
      },
      {
        nombre: "Akali",
        titulo: "The Rogue Assassin",
        foto: "Akali.png",
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
      },
      {
        nombre: "Fiora",
        titulo: "The Grand Duelist",
        foto: "Fiora.png",
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
      },
      {
        nombre: "Gwen",
        titulo: "The Hallowed Seamstress",
        foto: "Gwen.png",
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
      },
      {
        nombre: "Jayce",
        titulo: "The Defender Of Tomorrow",
        foto: "Jayce.png",
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
      },
      {
        nombre: "LeeSin",
        titulo: "The Blind Monk",
        foto: "LeeSin.png",
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
      },
      {
        nombre: "Vladimir",
        titulo: "The Crimson Reaper",
        foto: "Vladimir.png",
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
      },
    ];
    if ($card) {
      let campeon = champions.find((el) => el.nombre === $card.id);
      cambiarNombre(campeon);
      cambiarSpells(campeon);
      cambiarHabilidades(campeon);
      cambiarFondo(campeon);
      cambiarOrden(campeon);
    }
  });
})(document);

// Cambiar Prioridad de El Header Completo según el champ
function cambiarNombre(campeon) {
  const $champName = document.querySelector(".champion__info--header");

  $champName.innerHTML = `
  <img src="assets/${campeon.foto}" alt="${campeon.nombre}">
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

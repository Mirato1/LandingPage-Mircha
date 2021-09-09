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
  //   if (d.getElementById("champs__section")) {
  //     d.getElementById("champs__section").addEventListener("click", (e) => {
  //       let $card = e.target.closest(".champion__card");
  //       switch ($card.id) {
  //         case "aatrox":
  //           console.log("Soy", $card.id);
  //           break;
  //         case "akshan":
  //           console.log("Soy", $card.id);
  //           break;

  //         case "sylas":
  //           console.log("Soy", $card.id);
  //           break;
  //       }
  //     });
  //   }

  d.addEventListener("click", (e) => {
    let $card = e.target.closest(".champion__card");
    let champions = [
      {
        nombre: "aatrox",
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
      },
      {
        nombre: "akshan",
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
      },
      {
        nombre: "sylas",
        titulo: "The Unshackled",
        foto: "Sylas.png",
        summoners: {
          sum_1: "SummonerTeleport.png",
          sum_2: "SummonerFlash.png",
        },
        items: [
          "Tabis.png",
          "GA.png",
          "DD.png",
          "Chemptank.png",
          "Sterakk.png",
          "Goredrinker.png",
        ],
      },
      {
        nombre: "riven",
        titulo: "The Exile",
        foto: "Riven.png",
        summoners: {
          sum_1: "SummonerTeleport.png",
          sum_2: "SummonerFlash.png",
        },
        items: [
          "Tabis.png",
          "GA.png",
          "DD.png",
          "Chemptank.png",
          "Sterakk.png",
          "Goredrinker.png",
        ],
      },
      {
        nombre: "kled",
        titulo: "The Cantankerous Cavalier",
        foto: "Kled.png",
        summoners: {
          sum_1: "SummonerTeleport.png",
          sum_2: "SummonerFlash.png",
        },
        items: [
          "Tabis.png",
          "GA.png",
          "DD.png",
          "Chemptank.png",
          "Sterakk.png",
          "Goredrinker.png",
        ],
      },
      {
        nombre: "camille",
        titulo: "The Steel Shadow",
        foto: "Camille.png",
        summoners: {
          sum_1: "SummonerTeleport.png",
          sum_2: "SummonerIgnite.png",
        },
        items: [
          "Tabis.png",
          "GA.png",
          "DD.png",
          "Chemptank.png",
          "Sterakk.png",
          "Goredrinker.png",
        ],
      },
      {
        nombre: "akali",
        titulo: "The Rogue Assassin",
        foto: "Akali.png",
        summoners: {
          sum_1: "SummonerTeleport.png",
          sum_2: "SummonerIgnite.png",
        },
        items: [
          "Tabis.png",
          "GA.png",
          "DD.png",
          "Chemptank.png",
          "Sterakk.png",
          "Goredrinker.png",
        ],
      },
      {
        nombre: "fiora",
        titulo: "The Grand Duelist",
        foto: "Fiora.png",
        summoners: {
          sum_1: "SummonerTeleport.png",
          sum_2: "SummonerFlash.png",
        },
        items: [
          "Tabis.png",
          "GA.png",
          "DD.png",
          "Chemptank.png",
          "Sterakk.png",
          "Goredrinker.png",
        ],
      },
      {
        nombre: "gwen",
        titulo: "The Hallowed Seamstress",
        foto: "Gwen.png",
        summoners: {
          sum_1: "SummonerTeleport.png",
          sum_2: "SummonerIgnite.png",
        },
        items: [
          "Tabis.png",
          "GA.png",
          "DD.png",
          "Chemptank.png",
          "Sterakk.png",
          "Goredrinker.png",
        ],
      },
      {
        nombre: "jayce",
        titulo: "The Defender Of Tomorrow",
        foto: "Jayce.png",
        summoners: {
          sum_1: "SummonerTeleport.png",
          sum_2: "SummonerFlash.png",
        },
        items: [
          "Tabis.png",
          "GA.png",
          "DD.png",
          "Chemptank.png",
          "Sterakk.png",
          "Goredrinker.png",
        ],
      },
      {
        nombre: "leesin",
        titulo: "The Blind Monk",
        foto: "LeeSin.png",
        summoners: {
          sum_1: "SummonerTeleport.png",
          sum_2: "SummonerFlash.png",
        },
        items: [
          "Goredrinker.png",
          "Tabis.png",
          "Sterakk.png",
          "DD.png",
          "GA.png",
          "Chemptank.png",
        ],
      },
      {
        nombre: "vladimir",
        titulo: "The Crimson Reaper",
        foto: "Vladimir.png",
        summoners: {
          sum_1: "SummonerTeleport.png",
          sum_2: "SummonerFlash.png",
        },
        items: [
          "Tabis.png",
          "GA.png",
          "DD.png",
          "Chemptank.png",
          "Sterakk.png",
          "Goredrinker.png",
        ],
      },
    ];
    if ($card) {
      let campeon = champions.find((el) => el.nombre === $card.id);

      cambiarNombre(campeon);
      cambiarSpells(campeon);
      cambiarHabilidades(campeon);
    }
  });
})(document);

function cambiarNombre(campeon) {
  const $champName = document.querySelector(".champion__info--header"),
    campeonNombre =
      campeon.nombre.charAt(0).toUpperCase() + campeon.nombre.slice(1);

  $champName.innerHTML = `
  <img src="assets/${campeon.foto}" alt="${campeon.nombre}">
  <div class="champion__header--content">
        <h2>${campeon.nombre.toUpperCase()}</h2>
        <h4>${campeon.titulo}</h4>
    </div>
    <div class="champion__header--abilities">
        <div class="champion__skill--label">
                <img src="assets/${campeonNombre}/${campeonNombre}_Passive.png" alt="${campeonNombre} Passive">
                <div class="skill__label--key bottom-center">P</div>
                </div>
                            <div class="champion__skill--label">
                                <img src="assets/${campeonNombre}/${campeonNombre}Q.png" alt="${campeonNombre} Q">
                                <div class="skill__label--key bottom-center">Q</div>
                            </div>
                            <div class="champion__skill--label">
                                <img src="assets/${campeonNombre}/${campeonNombre}W.png" alt="${campeonNombre} W">
                                <div class="skill__label--key bottom-center">W</div>
                            </div>
                            <div class="champion__skill--label">
                                <img src="assets/${campeonNombre}/${campeonNombre}E.png" alt="${campeonNombre} E">
                                <div class="skill__label--key bottom-center">E</div>
                            </div>
                            <div class="champion__skill--label">
                                <img src="assets/${campeonNombre}/${campeonNombre}R.png" alt="${campeonNombre} R">
                                <div class="skill__label--key bottom-center">R</div>
                            </div>
                        </div>
  `;
}

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

function cambiarHabilidades(campeon) {
  const $champPriority = document.querySelectorAll(
    ".skill__priority--path div"
  );
  console.log($champPriority);
}

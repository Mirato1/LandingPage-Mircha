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

// Header Espía

((d) => {
  const $sections = d.querySelectorAll("section[data__scroll--spy]");

  const cb = (entries) => {
    entries.forEach((entry) => {
      const id = entry.target.getAttribute("id");

      if (entry.isIntersecting) {
        d.querySelector(`a[data__scroll--spy][href="#${id}"]`).classList.add(
          "spy__on"
        );
      } else {
        d.querySelector(`a[data__scroll--spy][href="#${id}"]`).classList.remove(
          "spy__on"
        );
      }
    });
  };

  const observer = new IntersectionObserver(cb, {
    threshold: [0.4, 0.75],
  });

  $sections.forEach((el) => observer.observe(el));
})(document);

//Interactividad Campeones
((d) => {
  const fighter = `<path d="M67.84 56.35v5.5c8.62-8.62 14.37 0 14.37 0C112.14 40.78 90.35 2 90.35 2s-.72 17.24-15.08 27.77v16.52c-.24 4.79-3.84 7.9-7.43 10.06M17.79 62.09s4.07-6.46 10.78-2.63L20.91 48.2l6.7-16c-17.24-10.54-18-29.93-18-29.93S-12.14 41 17.79 62.09M26.89 83.89l5.51-18.68-.24-.48L19.23 77.9A17.78 17.78 0 017.5 83.17H3l-1 2.39 12 11.5zM92.27 83.89a16.24 16.24 0 01-11.74-5.27L68.8 66.88l3.83 17.72L85.8 98l12-11.49-1-2.4zM55.87 42.7c0 .24-.24.48-.24.71h.72c5.75.48 7.66 2.64 9.1 7.67a9.35 9.35 0 002.39-1.92c1-1 1.68-1.67 1.68-2.63V28.09a2 2 0 00-1.68-1.92l-31.37-5.74H36a2.39 2.39 0 00-2.39 2.39v6.71l24.9 3.35z" fill="#D0A85C"></path><path d="M60.18 54c-1.2-5.27-1.44-4.55-5.75-4.79L40.78 48v-3.87h5.51A4.09 4.09 0 0050.36 41l1-3.35L32.4 35l-5 12.22 11.74 17-5.54 18.47L49.88 98l16.53-15.07s-6.23-28.5-6.23-29M49.88 2.23l-4.79 10.29 4.79 3.83 4.79-3.83zM62.1 9.41l1.43 6h6l2.87-11zM30.25 15.4h6l.24-.72 1.2-5.27-10.3-5z" fill="#D0A85C"></path>
  `,
    mage = `<path d="M84.48 77.3h13.41l-3.83-12.93h-9.58a36.73 36.73 0 00-27.54 12.45L50 85l-6.94-8.14a36.73 36.73 0 00-27.54-12.49H5.94L2.11 77.3h13.41a36.73 36.73 0 0127.54 12.45l.71.72h-9.1v7.42h30.9v-7.42h-9.1l.71-.72a35.85 35.85 0 0127.3-12.45" fill="#D0A85C"></path><path d="M56.23 54.31L50 62.21l-6.23-7.9a5.42 5.42 0 01-.24-6.47L50 37.31l6.47 10.53a5.42 5.42 0 01-.24 6.47M42.58 28.93l-7.91 12.69a13.37 13.37 0 00.72 15.09L50 75.14l14.61-18.43a13 13 0 00.72-15.09L50 17l-.48.72a5.58 5.58 0 01-4.31 1.68c-4.07 0-7.18-8.62 4.55-17.24 0 0-28.74 5.5-14.85 30.41z" fill="#D0A85C"></path>`,
    assassin = `<path d="M56.59 73.71l1.67-2.88c5.75-9.34 5.51-16 3.83-20.59a39.78 39.78 0 01-9.1 16 2 2 0 01-1.43.48H48.2a2.17 2.17 0 01-1.67-.72 39.78 39.78 0 01-9.1-16c-1.68 4.55-1.68 11.26 3.83 20.59l1.68 2.88-3.36 5.75 10.06 17.72L59.7 79.22z" fill="#D0A85C"></path><path d="M73.11 38.74c-3.35-4.31-6-10-6-18.91 0-4.07-3.59-8.15-7.66-12-4.79-4.31-5.75-5.74-9.58-5.74s-4.79 1.43-9.34 5.74c-4.07 3.83-7.66 7.91-7.66 12 0 8.86-2.88 14.6-6 18.68L12.76 52.87 2.23 45.69v12.93S2.47 84 39.58 97.89c0 0-14.13-7.18-16.28-31.13-.24-1.67-.24-9.1-.24-10.29A119.77 119.77 0 0036.71 74c-.72-1.2-1.44-2.64-2.16-3.83-5-10.54-4.07-18.2-1.67-23.47a22.77 22.77 0 017.42-8.86l9.58 9.58 9.58-9.58a22.77 22.77 0 017.42 8.86c2.4 5.27 3.59 12.93-1.43 23.23-.72 1.38-1.45 2.58-2.16 4.07a119.77 119.77 0 0013.65-17.53c0 1.19 0 8.62-.24 10.29-2.39 23.95-16.28 31.13-16.28 31.13C97.53 84 97.77 58.62 97.77 58.62V45.69l-10.53 7.18z" fill="#D0A85C"></path>`,
    marksman = `<path d="M28.69 27.25h6.94l1.92-6.94-13.41-7.91zM71.31 27.25l4.55-14.85-13.41 7.91 1.92 6.94zM71.31 35.39c-1.43 0-12.21-3.83-12.21-3.83L50 42.34l-9.1-10.78s-10.54 3.83-12.21 3.83c-7.67 0-4.79-7.18-4.79-7.18S4.26 48.32 2.11 64.13c0 0 5.74-8.86 24.42-13.17a26.22 26.22 0 0013.89 12.93c-.72-3.11-1.44-6.71-2.15-10.06a22.36 22.36 0 01-3.84-4.31c.72 0 7.19-.72 8.15-.72.71 2.64 4.55 28.74 4.55 28.74l-7 10.3v10L50 93.82l9.82 4.07V87.6l-7-10.3s3.84-26.1 4.55-28.74c.72 0 7.19.72 8.15.72a16.52 16.52 0 01-3.84 4.31 98.08 98.08 0 00-2.15 10.06 25.33 25.33 0 0013.94-12.93c18.68 4.55 24.42 13.17 24.42 13.17C95.74 48.32 76.1 28 76.1 28s2.88 7.42-4.79 7.42" fill="#D0A85C"></path><path d="M50 2.11l-7.66 21.31h.24L50 33.24l7.42-9.82h.24z" fill="#D0A85C"></path>`;

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
        rol: fighter,
        tips: `
        <li>
            En <b>early</b> no gasten la <b>Q</b> en la wave, sino en pokear al enemigo.
        </li>
        <li>
            Tratar de cancelar la animación del básico con la <b>E</b>.
        </li>
        <li>
             Utilizar la <b>E</b> al final de la animación de la <b>Q</b> para poder golpear la
             2° más fácil.
        </li>
        <li>
            Si no van a pegar la <b>Q</b> dejen que se vaya el cooldown así la tienen más
             rápido.
     </li>
        `,
        counters: [
          {
            nombre: "Irelia",
            tips: `
            <li><b>BANEARLA</b></li>
            <li>Pedir <b>gankeos</b> porque si sabe jugar es muy complicado.</li>
            <li>Pelearle cuando no tenga <b>stacks</b>.</li>
             <li>Esquivar su <b>E</b> y que cuando usa su <b>Q</b> aparece detrás de nosotros.</li>
            `,
          },
          {
            nombre: "Fiora",
            tips: `
            <li>Guardar la <b>E</b> para el <b>Parry</b></li>
            <li>Pokear con la 1° <b>Q</b></li>
            <li><b>Rushear</b> tabis y corta curas</li>
            <li><b>Freezear</b> en torre ya que es muy</li>
            `,
          },
          {
            nombre: "Mordekaiser",
            tips: `
            <li>Tu <b>Q</b> tiene más rango que la de él.</li>
            <li>Pokear antes de hacer <b>all in</b> y estar pendiente del <b>CD</b> de su escudo.</li>
            <li>Abusar que es muy gankeable en nivel bajo.</li>
            <li>Hacer <b>trades</b> cortos e ir pokeando con las Q.</li>
            `,
          },
          {
            nombre: "Jayce",
            tips: `
            <li>Empezar con <b>escudo</b> y pedir gank <b>early</b> ya que suelen pushear mucho.</li>
            <li>Estar atento de cuando cambia a rango que es muy <b>vulnerable</b>.</li>
             <li>En nivel <b>7/8/9</b> hay que empezar a pokearlo con la primera <b>Q</b>.</li>
            <li>Rushear <b>tabis</b> o te caga a piñas.</li>
            `,
          },
        ],
        easy: [
          {
            nombre: "Shen",
            tips: `
            <li>Tener cuidado si va con <b>Ignite</b>.</li>
            <li>Si usa su <b>E</b> se come el combo gratis.</li>
             <li>Si está bajo torre pokearlo a puras <b>Q</b> .</li>
            <li>Su <b>E</b> es cancelable ya sea con la <b>Q</b> o la <b>W</b>.</li>
            `,
          },
          {
            nombre: "Sylas",
            tips: `
            <li>Si se acerca a farmear <b>Q</b>, la clave es punishearlo cuando farmea.</li>
            <li>Si esquivas la <b>E</b> queda regalado el pibe.</li>
             <li>Nuestro nivel <b>6</b> es muchísimo mejor que el de él.</li>
            <li>Saquen daño de primera en vez de corta curas ya que tiene poca armor.</li>
            `,
          },
          {
            nombre: "Vladimir",
            tips: `
            <li>Tienen que hacer trades largos para gastarle su <b>W</b>.</li>
            <li>Nuestra <b>W</b> lo puede agarrar cuando él usa la suya</b>.</li>
             <li>Es recomendable que <b>congelemos</b> la línea cerca de torre ya que es muy fácil gankearlo.</li>
            <li>Podemos rushear corta curas o daño ya que es muy <b>squishy</b>.</li>
            `,
          },
          {
            nombre: "Gnar",
            tips: `
            <li>Empezar con <b>escudo</b> y pedir gank <b>early</b> ya que suelen pushear mucho.</li>
            <li>Estar atento de cuando cambia a rango que es muy <b>vulnerable</b>.</li>
             <li>En nivel <b>7/8/9</b> hay que empezar a pokearlo con la primera <b>Q</b>.</li>
            <li>Rushear <b>tabis</b> o te caga a piñas.</li>
            `,
          },
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
        rol: marksman,
        tips: `
        <li>
            En <b>early</b> abusar mucho del rango y el daño que hace nuestra pasiva + la runa.
        </li>
        <li>
            Guardarse la <b>E</b> o bien usarla precavidamente si sabemos que vamos a matar.
        </li>
        <li>
             <b>Wardear</b> ya que somos muy vulnerables a enemigos que se lancen y no podamos usar la <b>E</b>.
        </li>
        <li>
            <b>Roamear</b> mucho con la <b>W</b> para poder ayudar al team y sacar más gold.    
        </li>
        `,
        counters: [
          {
            nombre: "Tryndamere",
            tips: `
            <li>Intentar abusar en <b>early</b> pero después en lvl 6 hace lo que se le canta.</li>
            <li>Pedir <b>ganks</b> para poder abusar en nivel bajo así roamean.</li>
             <li>En nivel <b>7/8/9</b> hay que empezar a pokearlo con la primera <b>Q</b>.</li>
            <li>Rushear <b>tabis</b> o te caga a piñas.</li>
            `,
          },
          {
            nombre: "Irelia",
            tips: `
            <li>Empezar con <b>escudo</b> y pedir gank <b>early</b> ya que suelen pushear mucho.</li>
            <li>Estar atento de cuando cambia a rango que es muy <b>vulnerable</b>.</li>
             <li>En nivel <b>7/8/9</b> hay que empezar a pokearlo con la primera <b>Q</b>.</li>
            <li>Rushear <b>tabis</b> o te caga a piñas.</li>
            `,
          },
          {
            nombre: "Jax",
            tips: `
            <li>Empezar con <b>escudo</b> y pedir gank <b>early</b> ya que suelen pushear mucho.</li>
            <li>Estar atento de cuando cambia a rango que es muy <b>vulnerable</b>.</li>
             <li>En nivel <b>7/8/9</b> hay que empezar a pokearlo con la primera <b>Q</b>.</li>
            <li>Rushear <b>tabis</b> o te caga a piñas.</li>
            `,
          },
          {
            nombre: "Kennen",
            tips: `
            <li>Empezar con <b>escudo</b> y pedir gank <b>early</b> ya que suelen pushear mucho.</li>
            <li>Estar atento de cuando cambia a rango que es muy <b>vulnerable</b>.</li>
             <li>En nivel <b>7/8/9</b> hay que empezar a pokearlo con la primera <b>Q</b>.</li>
            <li>Rushear <b>tabis</b> o te caga a piñas.</li>
            `,
          },
        ],
        easy: [
          {
            nombre: "Fiora",
            tips: `
            <li>Empezar con <b>escudo</b> y pedir gank <b>early</b> ya que suelen pushear mucho.</li>
            <li>Estar atento de cuando cambia a rango que es muy <b>vulnerable</b>.</li>
             <li>En nivel <b>7/8/9</b> hay que empezar a pokearlo con la primera <b>Q</b>.</li>
            <li>Rushear <b>tabis</b> o te caga a piñas.</li>
            `,
          },
          {
            nombre: "Sylas",
            tips: `
            <li>Empezar con <b>escudo</b> y pedir gank <b>early</b> ya que suelen pushear mucho.</li>
            <li>Estar atento de cuando cambia a rango que es muy <b>vulnerable</b>.</li>
             <li>En nivel <b>7/8/9</b> hay que empezar a pokearlo con la primera <b>Q</b>.</li>
            <li>Rushear <b>tabis</b> o te caga a piñas.</li>
            `,
          },
          {
            nombre: "Gwen",
            tips: `
            <li>Empezar con <b>escudo</b> y pedir gank <b>early</b> ya que suelen pushear mucho.</li>
            <li>Estar atento de cuando cambia a rango que es muy <b>vulnerable</b>.</li>
             <li>En nivel <b>7/8/9</b> hay que empezar a pokearlo con la primera <b>Q</b>.</li>
            <li>Rushear <b>tabis</b> o te caga a piñas.</li>
            `,
          },
          {
            nombre: "Renekton",
            tips: `
            <li>Empezar con <b>escudo</b> y pedir gank <b>early</b> ya que suelen pushear mucho.</li>
            <li>Estar atento de cuando cambia a rango que es muy <b>vulnerable</b>.</li>
             <li>En nivel <b>7/8/9</b> hay que empezar a pokearlo con la primera <b>Q</b>.</li>
            <li>Rushear <b>tabis</b> o te caga a piñas.</li>
            `,
          },
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
        rol: mage,
        tips: `
        <li>
            En <b>early</b> abusar mucho del rango y el daño que hace nuestra pasiva + la runa.
        </li>
        <li>
            Guardarse la <b>E</b> o bien usarla precavidamente.
        </li>
        <li>
             <b>Wardear</b> ya que somos muy vulnerables a enemigos que se lancen y no podamos usar la <b>E</b>.
        </li>
        <li>
            <b>Roamear</b> mucho con la <b>W</b> para poder ayudar al team y sacar más gold.    
        </li>
        `,
        counters: [
          {
            nombre: "Aatrox",
            tips: `
            <li>Empezar con <b>escudo</b> y pedir gank <b>early</b> ya que suelen pushear mucho.</li>
            <li>Estar atento de cuando cambia a rango que es muy <b>vulnerable</b>.</li>
             <li>En nivel <b>7/8/9</b> hay que empezar a pokearlo con la primera <b>Q</b>.</li>
            <li>Rushear <b>tabis</b> o te caga a piñas.</li>
            `,
          },
          {
            nombre: "Renekton",
            tips: `
            <li>Empezar con <b>escudo</b> y pedir gank <b>early</b> ya que suelen pushear mucho.</li>
            <li>Estar atento de cuando cambia a rango que es muy <b>vulnerable</b>.</li>
             <li>En nivel <b>7/8/9</b> hay que empezar a pokearlo con la primera <b>Q</b>.</li>
            <li>Rushear <b>tabis</b> o te caga a piñas.</li>
            `,
          },
          {
            nombre: "Fiora",
            tips: `
            <li>Empezar con <b>escudo</b> y pedir gank <b>early</b> ya que suelen pushear mucho.</li>
            <li>Estar atento de cuando cambia a rango que es muy <b>vulnerable</b>.</li>
             <li>En nivel <b>7/8/9</b> hay que empezar a pokearlo con la primera <b>Q</b>.</li>
            <li>Rushear <b>tabis</b> o te caga a piñas.</li>
            `,
          },
          {
            nombre: "Riven",
            tips: `
            <li>Empezar con <b>escudo</b> y pedir gank <b>early</b> ya que suelen pushear mucho.</li>
            <li>Estar atento de cuando cambia a rango que es muy <b>vulnerable</b>.</li>
             <li>En nivel <b>7/8/9</b> hay que empezar a pokearlo con la primera <b>Q</b>.</li>
            <li>Rushear <b>tabis</b> o te caga a piñas.</li>
            `,
          },
        ],
        easy: [
          {
            nombre: "Malphite",
            tips: `
            <li>Empezar con <b>escudo</b> y pedir gank <b>early</b> ya que suelen pushear mucho.</li>
            <li>Estar atento de cuando cambia a rango que es muy <b>vulnerable</b>.</li>
             <li>En nivel <b>7/8/9</b> hay que empezar a pokearlo con la primera <b>Q</b>.</li>
            <li>Rushear <b>tabis</b> o te caga a piñas.</li>
            `,
          },
          {
            nombre: "Gnar",
            tips: `
            <li>Empezar con <b>escudo</b> y pedir gank <b>early</b> ya que suelen pushear mucho.</li>
            <li>Estar atento de cuando cambia a rango que es muy <b>vulnerable</b>.</li>
             <li>En nivel <b>7/8/9</b> hay que empezar a pokearlo con la primera <b>Q</b>.</li>
            <li>Rushear <b>tabis</b> o te caga a piñas.</li>
            `,
          },
          {
            nombre: "Kennen",
            tips: `
            <li>Empezar con <b>escudo</b> y pedir gank <b>early</b> ya que suelen pushear mucho.</li>
            <li>Estar atento de cuando cambia a rango que es muy <b>vulnerable</b>.</li>
             <li>En nivel <b>7/8/9</b> hay que empezar a pokearlo con la primera <b>Q</b>.</li>
            <li>Rushear <b>tabis</b> o te caga a piñas.</li>
            `,
          },
          {
            nombre: "Mordekaiser",
            tips: `
            <li>Empezar con <b>escudo</b> y pedir gank <b>early</b> ya que suelen pushear mucho.</li>
            <li>Estar atento de cuando cambia a rango que es muy <b>vulnerable</b>.</li>
             <li>En nivel <b>7/8/9</b> hay que empezar a pokearlo con la primera <b>Q</b>.</li>
            <li>Rushear <b>tabis</b> o te caga a piñas.</li>
            `,
          },
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
        rol: fighter,
        tips: `
        <li>
            En <b>early</b> abusar mucho del rango y el daño que hace nuestra pasiva + la runa.
        </li>
        <li>
            Guardarse la <b>E</b> o bien usarla precavidamente.
        </li>
        <li>
             <b>Wardear</b> ya que somos muy vulnerables a enemigos que se lancen y no podamos usar la <b>E</b>.
        </li>
        <li>
            <b>Roamear</b> mucho con la <b>W</b> para poder ayudar al team y sacar más gold.    
        </li>
        `,
        counters: [
          {
            nombre: "Fiora",
            tips: `
            <li>Empezar con <b>escudo</b> y pedir gank <b>early</b> ya que suelen pushear mucho.</li>
            <li>Estar atento de cuando cambia a rango que es muy <b>vulnerable</b>.</li>
             <li>En nivel <b>7/8/9</b> hay que empezar a pokearlo con la primera <b>Q</b>.</li>
            <li>Rushear <b>tabis</b> o te caga a piñas.</li>
            `,
          },
          {
            nombre: "Renekton",
            tips: `
            <li>Empezar con <b>escudo</b> y pedir gank <b>early</b> ya que suelen pushear mucho.</li>
            <li>Estar atento de cuando cambia a rango que es muy <b>vulnerable</b>.</li>
             <li>En nivel <b>7/8/9</b> hay que empezar a pokearlo con la primera <b>Q</b>.</li>
            <li>Rushear <b>tabis</b> o te caga a piñas.</li>
            `,
          },
          {
            nombre: "Kennen",
            tips: `
            <li>Empezar con <b>escudo</b> y pedir gank <b>early</b> ya que suelen pushear mucho.</li>
            <li>Estar atento de cuando cambia a rango que es muy <b>vulnerable</b>.</li>
             <li>En nivel <b>7/8/9</b> hay que empezar a pokearlo con la primera <b>Q</b>.</li>
            <li>Rushear <b>tabis</b> o te caga a piñas.</li>
            `,
          },
          {
            nombre: "Mordekaiser",
            tips: `
            <li>Empezar con <b>escudo</b> y pedir gank <b>early</b> ya que suelen pushear mucho.</li>
            <li>Estar atento de cuando cambia a rango que es muy <b>vulnerable</b>.</li>
             <li>En nivel <b>7/8/9</b> hay que empezar a pokearlo con la primera <b>Q</b>.</li>
            <li>Rushear <b>tabis</b> o te caga a piñas.</li>
            `,
          },
        ],
        easy: [
          {
            nombre: "Gangplank",
            tips: `
            <li>Empezar con <b>escudo</b> y pedir gank <b>early</b> ya que suelen pushear mucho.</li>
            <li>Estar atento de cuando cambia a rango que es muy <b>vulnerable</b>.</li>
             <li>En nivel <b>7/8/9</b> hay que empezar a pokearlo con la primera <b>Q</b>.</li>
            <li>Rushear <b>tabis</b> o te caga a piñas.</li>
            `,
          },
          {
            nombre: "Camille",
            tips: `
            <li>Empezar con <b>escudo</b> y pedir gank <b>early</b> ya que suelen pushear mucho.</li>
            <li>Estar atento de cuando cambia a rango que es muy <b>vulnerable</b>.</li>
             <li>En nivel <b>7/8/9</b> hay que empezar a pokearlo con la primera <b>Q</b>.</li>
            <li>Rushear <b>tabis</b> o te caga a piñas.</li>
            `,
          },
          {
            nombre: "Sylas",
            tips: `
            <li>Empezar con <b>escudo</b> y pedir gank <b>early</b> ya que suelen pushear mucho.</li>
            <li>Estar atento de cuando cambia a rango que es muy <b>vulnerable</b>.</li>
             <li>En nivel <b>7/8/9</b> hay que empezar a pokearlo con la primera <b>Q</b>.</li>
            <li>Rushear <b>tabis</b> o te caga a piñas.</li>
            `,
          },
          {
            nombre: "Jax",
            tips: `
            <li>Empezar con <b>escudo</b> y pedir gank <b>early</b> ya que suelen pushear mucho.</li>
            <li>Estar atento de cuando cambia a rango que es muy <b>vulnerable</b>.</li>
             <li>En nivel <b>7/8/9</b> hay que empezar a pokearlo con la primera <b>Q</b>.</li>
            <li>Rushear <b>tabis</b> o te caga a piñas.</li>
            `,
          },
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
        rol: fighter,
        tips: `
        <li>
            En <b>early</b> abusar mucho del rango y el daño que hace nuestra pasiva + la runa.
        </li>
        <li>
            Guardarse la <b>E</b> o bien usarla precavidamente.
        </li>
        <li>
             <b>Wardear</b> ya que somos muy vulnerables a enemigos que se lancen y no podamos usar la <b>E</b>.
        </li>
        <li>
            <b>Roamear</b> mucho con la <b>W</b> para poder ayudar al team y sacar más gold.    
        </li>
        `,
        counters: [
          {
            nombre: "Fiora",
            tips: `
            <li>Empezar con <b>escudo</b> y pedir gank <b>early</b> ya que suelen pushear mucho.</li>
            <li>Estar atento de cuando cambia a rango que es muy <b>vulnerable</b>.</li>
             <li>En nivel <b>7/8/9</b> hay que empezar a pokearlo con la primera <b>Q</b>.</li>
            <li>Rushear <b>tabis</b> o te caga a piñas.</li>
            `,
          },
          {
            nombre: "Jax",
            tips: `
            <li>Empezar con <b>escudo</b> y pedir gank <b>early</b> ya que suelen pushear mucho.</li>
            <li>Estar atento de cuando cambia a rango que es muy <b>vulnerable</b>.</li>
             <li>En nivel <b>7/8/9</b> hay que empezar a pokearlo con la primera <b>Q</b>.</li>
            <li>Rushear <b>tabis</b> o te caga a piñas.</li>
            `,
          },
          {
            nombre: "Gnar",
            tips: `
            <li>Empezar con <b>escudo</b> y pedir gank <b>early</b> ya que suelen pushear mucho.</li>
            <li>Estar atento de cuando cambia a rango que es muy <b>vulnerable</b>.</li>
             <li>En nivel <b>7/8/9</b> hay que empezar a pokearlo con la primera <b>Q</b>.</li>
            <li>Rushear <b>tabis</b> o te caga a piñas.</li>
            `,
          },
          {
            nombre: "Shen",
            tips: `
            <li>Empezar con <b>escudo</b> y pedir gank <b>early</b> ya que suelen pushear mucho.</li>
            <li>Estar atento de cuando cambia a rango que es muy <b>vulnerable</b>.</li>
             <li>En nivel <b>7/8/9</b> hay que empezar a pokearlo con la primera <b>Q</b>.</li>
            <li>Rushear <b>tabis</b> o te caga a piñas.</li>
            `,
          },
        ],
        easy: [
          {
            nombre: "Akali",
            tips: `
            <li>Empezar con <b>escudo</b> y pedir gank <b>early</b> ya que suelen pushear mucho.</li>
            <li>Estar atento de cuando cambia a rango que es muy <b>vulnerable</b>.</li>
             <li>En nivel <b>7/8/9</b> hay que empezar a pokearlo con la primera <b>Q</b>.</li>
            <li>Rushear <b>tabis</b> o te caga a piñas.</li>
            `,
          },
          {
            nombre: "Sylas",
            tips: `
            <li>Empezar con <b>escudo</b> y pedir gank <b>early</b> ya que suelen pushear mucho.</li>
            <li>Estar atento de cuando cambia a rango que es muy <b>vulnerable</b>.</li>
             <li>En nivel <b>7/8/9</b> hay que empezar a pokearlo con la primera <b>Q</b>.</li>
            <li>Rushear <b>tabis</b> o te caga a piñas.</li>
            `,
          },
          {
            nombre: "Vladimir",
            tips: `
            <li>Empezar con <b>escudo</b> y pedir gank <b>early</b> ya que suelen pushear mucho.</li>
            <li>Estar atento de cuando cambia a rango que es muy <b>vulnerable</b>.</li>
             <li>En nivel <b>7/8/9</b> hay que empezar a pokearlo con la primera <b>Q</b>.</li>
            <li>Rushear <b>tabis</b> o te caga a piñas.</li>
            `,
          },
          {
            nombre: "Aatrox",
            tips: `
            <li>Empezar con <b>escudo</b> y pedir gank <b>early</b> ya que suelen pushear mucho.</li>
            <li>Estar atento de cuando cambia a rango que es muy <b>vulnerable</b>.</li>
             <li>En nivel <b>7/8/9</b> hay que empezar a pokearlo con la primera <b>Q</b>.</li>
            <li>Rushear <b>tabis</b> o te caga a piñas.</li>
            `,
          },
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
        rol: fighter,
        tips: `
        <li>
            En <b>early</b> abusar mucho del rango y el daño que hace nuestra pasiva + la runa.
        </li>
        <li>
            Guardarse la <b>E</b> o bien usarla precavidamente.
        </li>
        <li>
             <b>Wardear</b> ya que somos muy vulnerables a enemigos que se lancen y no podamos usar la <b>E</b>.
        </li>
        <li>
            <b>Roamear</b> mucho con la <b>W</b> para poder ayudar al team y sacar más gold.    
        </li>
        `,
        counters: [
          {
            nombre: "Renekton",
            tips: `
            <li>Empezar con <b>escudo</b> y pedir gank <b>early</b> ya que suelen pushear mucho.</li>
            <li>Estar atento de cuando cambia a rango que es muy <b>vulnerable</b>.</li>
             <li>En nivel <b>7/8/9</b> hay que empezar a pokearlo con la primera <b>Q</b>.</li>
            <li>Rushear <b>tabis</b> o te caga a piñas.</li>
            `,
          },
          {
            nombre: "Fiora",
            tips: `
            <li>Empezar con <b>escudo</b> y pedir gank <b>early</b> ya que suelen pushear mucho.</li>
            <li>Estar atento de cuando cambia a rango que es muy <b>vulnerable</b>.</li>
             <li>En nivel <b>7/8/9</b> hay que empezar a pokearlo con la primera <b>Q</b>.</li>
            <li>Rushear <b>tabis</b> o te caga a piñas.</li>
            `,
          },
          {
            nombre: "Jax",
            tips: `
            <li>Empezar con <b>escudo</b> y pedir gank <b>early</b> ya que suelen pushear mucho.</li>
            <li>Estar atento de cuando cambia a rango que es muy <b>vulnerable</b>.</li>
             <li>En nivel <b>7/8/9</b> hay que empezar a pokearlo con la primera <b>Q</b>.</li>
            <li>Rushear <b>tabis</b> o te caga a piñas.</li>
            `,
          },
          {
            nombre: "Darius",
            tips: `
            <li>Empezar con <b>escudo</b> y pedir gank <b>early</b> ya que suelen pushear mucho.</li>
            <li>Estar atento de cuando cambia a rango que es muy <b>vulnerable</b>.</li>
             <li>En nivel <b>7/8/9</b> hay que empezar a pokearlo con la primera <b>Q</b>.</li>
            <li>Rushear <b>tabis</b> o te caga a piñas.</li>
            `,
          },
        ],
        easy: [
          {
            nombre: "Gnar",
            tips: `
            <li>Empezar con <b>escudo</b> y pedir gank <b>early</b> ya que suelen pushear mucho.</li>
            <li>Estar atento de cuando cambia a rango que es muy <b>vulnerable</b>.</li>
             <li>En nivel <b>7/8/9</b> hay que empezar a pokearlo con la primera <b>Q</b>.</li>
            <li>Rushear <b>tabis</b> o te caga a piñas.</li>
            `,
          },
          {
            nombre: "Kled",
            tips: `
            <li>Empezar con <b>escudo</b> y pedir gank <b>early</b> ya que suelen pushear mucho.</li>
            <li>Estar atento de cuando cambia a rango que es muy <b>vulnerable</b>.</li>
             <li>En nivel <b>7/8/9</b> hay que empezar a pokearlo con la primera <b>Q</b>.</li>
            <li>Rushear <b>tabis</b> o te caga a piñas.</li>
            `,
          },
          {
            nombre: "Gangplank",
            tips: `
            <li>Empezar con <b>escudo</b> y pedir gank <b>early</b> ya que suelen pushear mucho.</li>
            <li>Estar atento de cuando cambia a rango que es muy <b>vulnerable</b>.</li>
             <li>En nivel <b>7/8/9</b> hay que empezar a pokearlo con la primera <b>Q</b>.</li>
            <li>Rushear <b>tabis</b> o te caga a piñas.</li>
            `,
          },
          {
            nombre: "Mordekaiser",
            tips: `
            <li>Empezar con <b>escudo</b> y pedir gank <b>early</b> ya que suelen pushear mucho.</li>
            <li>Estar atento de cuando cambia a rango que es muy <b>vulnerable</b>.</li>
             <li>En nivel <b>7/8/9</b> hay que empezar a pokearlo con la primera <b>Q</b>.</li>
            <li>Rushear <b>tabis</b> o te caga a piñas.</li>
            `,
          },
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
        rol: assassin,
        tips: `
        <li>
            En <b>early</b> abusar mucho del rango y el daño que hace nuestra pasiva + la runa.
        </li>
        <li>
            Guardarse la <b>E</b> o bien usarla precavidamente.
        </li>
        <li>
             <b>Wardear</b> ya que somos muy vulnerables a enemigos que se lancen y no podamos usar la <b>E</b>.
        </li>
        <li>
            <b>Roamear</b> mucho con la <b>W</b> para poder ayudar al team y sacar más gold.    
        </li>
        `,
        counters: [
          {
            nombre: "Renekton",
            tips: `
            <li>Empezar con <b>escudo</b> y pedir gank <b>early</b> ya que suelen pushear mucho.</li>
            <li>Estar atento de cuando cambia a rango que es muy <b>vulnerable</b>.</li>
             <li>En nivel <b>7/8/9</b> hay que empezar a pokearlo con la primera <b>Q</b>.</li>
            <li>Rushear <b>tabis</b> o te caga a piñas.</li>
            `,
          },
          {
            nombre: "Kled",
            tips: `
            <li>Empezar con <b>escudo</b> y pedir gank <b>early</b> ya que suelen pushear mucho.</li>
            <li>Estar atento de cuando cambia a rango que es muy <b>vulnerable</b>.</li>
             <li>En nivel <b>7/8/9</b> hay que empezar a pokearlo con la primera <b>Q</b>.</li>
            <li>Rushear <b>tabis</b> o te caga a piñas.</li>
            `,
          },
          {
            nombre: "Irelia",
            tips: `
            <li>Empezar con <b>escudo</b> y pedir gank <b>early</b> ya que suelen pushear mucho.</li>
            <li>Estar atento de cuando cambia a rango que es muy <b>vulnerable</b>.</li>
             <li>En nivel <b>7/8/9</b> hay que empezar a pokearlo con la primera <b>Q</b>.</li>
            <li>Rushear <b>tabis</b> o te caga a piñas.</li>
            `,
          },
          {
            nombre: "Tryndamere",
            tips: `
            <li>Empezar con <b>escudo</b> y pedir gank <b>early</b> ya que suelen pushear mucho.</li>
            <li>Estar atento de cuando cambia a rango que es muy <b>vulnerable</b>.</li>
             <li>En nivel <b>7/8/9</b> hay que empezar a pokearlo con la primera <b>Q</b>.</li>
            <li>Rushear <b>tabis</b> o te caga a piñas.</li>
            `,
          },
        ],
        easy: [
          {
            nombre: "Jax",
            tips: `
            <li>Empezar con <b>escudo</b> y pedir gank <b>early</b> ya que suelen pushear mucho.</li>
            <li>Estar atento de cuando cambia a rango que es muy <b>vulnerable</b>.</li>
             <li>En nivel <b>7/8/9</b> hay que empezar a pokearlo con la primera <b>Q</b>.</li>
            <li>Rushear <b>tabis</b> o te caga a piñas.</li>
            `,
          },
          {
            nombre: "Gangplank",
            tips: `
            <li>Empezar con <b>escudo</b> y pedir gank <b>early</b> ya que suelen pushear mucho.</li>
            <li>Estar atento de cuando cambia a rango que es muy <b>vulnerable</b>.</li>
             <li>En nivel <b>7/8/9</b> hay que empezar a pokearlo con la primera <b>Q</b>.</li>
            <li>Rushear <b>tabis</b> o te caga a piñas.</li>
            `,
          },
          {
            nombre: "Sett",
            tips: `
            <li>Empezar con <b>escudo</b> y pedir gank <b>early</b> ya que suelen pushear mucho.</li>
            <li>Estar atento de cuando cambia a rango que es muy <b>vulnerable</b>.</li>
             <li>En nivel <b>7/8/9</b> hay que empezar a pokearlo con la primera <b>Q</b>.</li>
            <li>Rushear <b>tabis</b> o te caga a piñas.</li>
            `,
          },
          {
            nombre: "Gwen",
            tips: `
            <li>Empezar con <b>escudo</b> y pedir gank <b>early</b> ya que suelen pushear mucho.</li>
            <li>Estar atento de cuando cambia a rango que es muy <b>vulnerable</b>.</li>
             <li>En nivel <b>7/8/9</b> hay que empezar a pokearlo con la primera <b>Q</b>.</li>
            <li>Rushear <b>tabis</b> o te caga a piñas.</li>
            `,
          },
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
        rol: fighter,
        tips: `
        <li>
            En <b>early</b> abusar mucho del rango y el daño que hace nuestra pasiva + la runa.
        </li>
        <li>
            Guardarse la <b>E</b> o bien usarla precavidamente.
        </li>
        <li>
             <b>Wardear</b> ya que somos muy vulnerables a enemigos que se lancen y no podamos usar la <b>E</b>.
        </li>
        <li>
            <b>Roamear</b> mucho con la <b>W</b> para poder ayudar al team y sacar más gold.    
        </li>
        `,
        counters: [
          {
            nombre: "Jayce",
            tips: `
            <li>Empezar con <b>escudo</b> y pedir gank <b>early</b> ya que suelen pushear mucho.</li>
            <li>Estar atento de cuando cambia a rango que es muy <b>vulnerable</b>.</li>
             <li>En nivel <b>7/8/9</b> hay que empezar a pokearlo con la primera <b>Q</b>.</li>
            <li>Rushear <b>tabis</b> o te caga a piñas.</li>
            `,
          },
          {
            nombre: "Kennen",
            tips: `
            <li>Empezar con <b>escudo</b> y pedir gank <b>early</b> ya que suelen pushear mucho.</li>
            <li>Estar atento de cuando cambia a rango que es muy <b>vulnerable</b>.</li>
             <li>En nivel <b>7/8/9</b> hay que empezar a pokearlo con la primera <b>Q</b>.</li>
            <li>Rushear <b>tabis</b> o te caga a piñas.</li>
            `,
          },
          {
            nombre: "Renekton",
            tips: `
            <li>Empezar con <b>escudo</b> y pedir gank <b>early</b> ya que suelen pushear mucho.</li>
            <li>Estar atento de cuando cambia a rango que es muy <b>vulnerable</b>.</li>
             <li>En nivel <b>7/8/9</b> hay que empezar a pokearlo con la primera <b>Q</b>.</li>
            <li>Rushear <b>tabis</b> o te caga a piñas.</li>
            `,
          },
          {
            nombre: "Jax",
            tips: `
            <li>Empezar con <b>escudo</b> y pedir gank <b>early</b> ya que suelen pushear mucho.</li>
            <li>Estar atento de cuando cambia a rango que es muy <b>vulnerable</b>.</li>
             <li>En nivel <b>7/8/9</b> hay que empezar a pokearlo con la primera <b>Q</b>.</li>
            <li>Rushear <b>tabis</b> o te caga a piñas.</li>
            `,
          },
        ],
        easy: [
          {
            nombre: "Aatrox",
            tips: `
            <li>Empezar con <b>escudo</b> y pedir gank <b>early</b> ya que suelen pushear mucho.</li>
            <li>Estar atento de cuando cambia a rango que es muy <b>vulnerable</b>.</li>
             <li>En nivel <b>7/8/9</b> hay que empezar a pokearlo con la primera <b>Q</b>.</li>
            <li>Rushear <b>tabis</b> o te caga a piñas.</li>
            `,
          },
          {
            nombre: "Mordekaiser",
            tips: `
            <li>Empezar con <b>escudo</b> y pedir gank <b>early</b> ya que suelen pushear mucho.</li>
            <li>Estar atento de cuando cambia a rango que es muy <b>vulnerable</b>.</li>
             <li>En nivel <b>7/8/9</b> hay que empezar a pokearlo con la primera <b>Q</b>.</li>
            <li>Rushear <b>tabis</b> o te caga a piñas.</li>
            `,
          },
          {
            nombre: "Irelia",
            tips: `
            <li>Empezar con <b>escudo</b> y pedir gank <b>early</b> ya que suelen pushear mucho.</li>
            <li>Estar atento de cuando cambia a rango que es muy <b>vulnerable</b>.</li>
             <li>En nivel <b>7/8/9</b> hay que empezar a pokearlo con la primera <b>Q</b>.</li>
            <li>Rushear <b>tabis</b> o te caga a piñas.</li>
            `,
          },
          {
            nombre: "Camille",
            tips: `
            <li>Empezar con <b>escudo</b> y pedir gank <b>early</b> ya que suelen pushear mucho.</li>
            <li>Estar atento de cuando cambia a rango que es muy <b>vulnerable</b>.</li>
             <li>En nivel <b>7/8/9</b> hay que empezar a pokearlo con la primera <b>Q</b>.</li>
            <li>Rushear <b>tabis</b> o te caga a piñas.</li>
            `,
          },
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
        rol: fighter,
        tips: `
        <li>
            En <b>early</b> abusar mucho del rango y el daño que hace nuestra pasiva + la runa.
        </li>
        <li>
            Guardarse la <b>E</b> o bien usarla precavidamente.
        </li>
        <li>
             <b>Wardear</b> ya que somos muy vulnerables a enemigos que se lancen y no podamos usar la <b>E</b>.
        </li>
        <li>
            <b>Roamear</b> mucho con la <b>W</b> para poder ayudar al team y sacar más gold.    
        </li>
        `,
        counters: [
          {
            nombre: "Akshan",
            tips: `
            <li>Empezar con <b>escudo</b> y pedir gank <b>early</b> ya que suelen pushear mucho.</li>
            <li>Estar atento de cuando cambia a rango que es muy <b>vulnerable</b>.</li>
             <li>En nivel <b>7/8/9</b> hay que empezar a pokearlo con la primera <b>Q</b>.</li>
            <li>Rushear <b>tabis</b> o te caga a piñas.</li>
            `,
          },
          {
            nombre: "Fiora",
            tips: `
            <li>Empezar con <b>escudo</b> y pedir gank <b>early</b> ya que suelen pushear mucho.</li>
            <li>Estar atento de cuando cambia a rango que es muy <b>vulnerable</b>.</li>
             <li>En nivel <b>7/8/9</b> hay que empezar a pokearlo con la primera <b>Q</b>.</li>
            <li>Rushear <b>tabis</b> o te caga a piñas.</li>
            `,
          },
          {
            nombre: "Jax",
            tips: `
            <li>Empezar con <b>escudo</b> y pedir gank <b>early</b> ya que suelen pushear mucho.</li>
            <li>Estar atento de cuando cambia a rango que es muy <b>vulnerable</b>.</li>
             <li>En nivel <b>7/8/9</b> hay que empezar a pokearlo con la primera <b>Q</b>.</li>
            <li>Rushear <b>tabis</b> o te caga a piñas.</li>
            `,
          },
          {
            nombre: "Kennen",
            tips: `
            <li>Empezar con <b>escudo</b> y pedir gank <b>early</b> ya que suelen pushear mucho.</li>
            <li>Estar atento de cuando cambia a rango que es muy <b>vulnerable</b>.</li>
             <li>En nivel <b>7/8/9</b> hay que empezar a pokearlo con la primera <b>Q</b>.</li>
            <li>Rushear <b>tabis</b> o te caga a piñas.</li>
            `,
          },
        ],
        easy: [
          {
            nombre: "DrMundo",
            tips: `
            <li>Empezar con <b>escudo</b> y pedir gank <b>early</b> ya que suelen pushear mucho.</li>
            <li>Estar atento de cuando cambia a rango que es muy <b>vulnerable</b>.</li>
             <li>En nivel <b>7/8/9</b> hay que empezar a pokearlo con la primera <b>Q</b>.</li>
            <li>Rushear <b>tabis</b> o te caga a piñas.</li>
            `,
          },
          {
            nombre: "Mordekaiser",
            tips: `
            <li>Empezar con <b>escudo</b> y pedir gank <b>early</b> ya que suelen pushear mucho.</li>
            <li>Estar atento de cuando cambia a rango que es muy <b>vulnerable</b>.</li>
             <li>En nivel <b>7/8/9</b> hay que empezar a pokearlo con la primera <b>Q</b>.</li>
            <li>Rushear <b>tabis</b> o te caga a piñas.</li>
            `,
          },
          {
            nombre: "Malphite",
            tips: `
            <li>Empezar con <b>escudo</b> y pedir gank <b>early</b> ya que suelen pushear mucho.</li>
            <li>Estar atento de cuando cambia a rango que es muy <b>vulnerable</b>.</li>
             <li>En nivel <b>7/8/9</b> hay que empezar a pokearlo con la primera <b>Q</b>.</li>
            <li>Rushear <b>tabis</b> o te caga a piñas.</li>
            `,
          },
          {
            nombre: "Sylas",
            tips: `
            <li>Empezar con <b>escudo</b> y pedir gank <b>early</b> ya que suelen pushear mucho.</li>
            <li>Estar atento de cuando cambia a rango que es muy <b>vulnerable</b>.</li>
             <li>En nivel <b>7/8/9</b> hay que empezar a pokearlo con la primera <b>Q</b>.</li>
            <li>Rushear <b>tabis</b> o te caga a piñas.</li>
            `,
          },
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
        rol: fighter,
        tips: `
        <li>
            En <b>early</b> abusar mucho del rango y el daño que hace nuestra pasiva + la runa.
        </li>
        <li>
            Guardarse la <b>E</b> o bien usarla precavidamente.
        </li>
        <li>
             <b>Wardear</b> ya que somos muy vulnerables a enemigos que se lancen y no podamos usar la <b>E</b>.
        </li>
        <li>
            <b>Roamear</b> mucho con la <b>W</b> para poder ayudar al team y sacar más gold.    
        </li>
        `,
        counters: [
          {
            nombre: "Lucian",
            tips: `
            <li>Empezar con <b>escudo</b> y pedir gank <b>early</b> ya que suelen pushear mucho.</li>
            <li>Estar atento de cuando cambia a rango que es muy <b>vulnerable</b>.</li>
             <li>En nivel <b>7/8/9</b> hay que empezar a pokearlo con la primera <b>Q</b>.</li>
            <li>Rushear <b>tabis</b> o te caga a piñas.</li>
            `,
          },
          {
            nombre: "TahmKench",
            tips: `
            <li>Empezar con <b>escudo</b> y pedir gank <b>early</b> ya que suelen pushear mucho.</li>
            <li>Estar atento de cuando cambia a rango que es muy <b>vulnerable</b>.</li>
             <li>En nivel <b>7/8/9</b> hay que empezar a pokearlo con la primera <b>Q</b>.</li>
            <li>Rushear <b>tabis</b> o te caga a piñas.</li>
            `,
          },
          {
            nombre: "Malphite",
            tips: `
            <li>Empezar con <b>escudo</b> y pedir gank <b>early</b> ya que suelen pushear mucho.</li>
            <li>Estar atento de cuando cambia a rango que es muy <b>vulnerable</b>.</li>
             <li>En nivel <b>7/8/9</b> hay que empezar a pokearlo con la primera <b>Q</b>.</li>
            <li>Rushear <b>tabis</b> o te caga a piñas.</li>
            `,
          },
          {
            nombre: "Irelia",
            tips: `
            <li>Empezar con <b>escudo</b> y pedir gank <b>early</b> ya que suelen pushear mucho.</li>
            <li>Estar atento de cuando cambia a rango que es muy <b>vulnerable</b>.</li>
             <li>En nivel <b>7/8/9</b> hay que empezar a pokearlo con la primera <b>Q</b>.</li>
            <li>Rushear <b>tabis</b> o te caga a piñas.</li>
            `,
          },
        ],
        easy: [
          {
            nombre: "Gnar",
            tips: `
            <li>Empezar con <b>escudo</b> y pedir gank <b>early</b> ya que suelen pushear mucho.</li>
            <li>Estar atento de cuando cambia a rango que es muy <b>vulnerable</b>.</li>
             <li>En nivel <b>7/8/9</b> hay que empezar a pokearlo con la primera <b>Q</b>.</li>
            <li>Rushear <b>tabis</b> o te caga a piñas.</li>
            `,
          },
          {
            nombre: "Fiora",
            tips: `
            <li>Empezar con <b>escudo</b> y pedir gank <b>early</b> ya que suelen pushear mucho.</li>
            <li>Estar atento de cuando cambia a rango que es muy <b>vulnerable</b>.</li>
             <li>En nivel <b>7/8/9</b> hay que empezar a pokearlo con la primera <b>Q</b>.</li>
            <li>Rushear <b>tabis</b> o te caga a piñas.</li>
            `,
          },
          {
            nombre: "Gangplank",
            tips: `
            <li>Empezar con <b>escudo</b> y pedir gank <b>early</b> ya que suelen pushear mucho.</li>
            <li>Estar atento de cuando cambia a rango que es muy <b>vulnerable</b>.</li>
             <li>En nivel <b>7/8/9</b> hay que empezar a pokearlo con la primera <b>Q</b>.</li>
            <li>Rushear <b>tabis</b> o te caga a piñas.</li>
            `,
          },
          {
            nombre: "Aatrox",
            tips: `
            <li>Empezar con <b>escudo</b> y pedir gank <b>early</b> ya que suelen pushear mucho.</li>
            <li>Estar atento de cuando cambia a rango que es muy <b>vulnerable</b>.</li>
             <li>En nivel <b>7/8/9</b> hay que empezar a pokearlo con la primera <b>Q</b>.</li>
            <li>Rushear <b>tabis</b> o te caga a piñas.</li>
            `,
          },
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
        rol: fighter,
        tips: `
        <li>
            En <b>early</b> abusar mucho del rango y el daño que hace nuestra pasiva + la runa.
        </li>
        <li>
            Guardarse la <b>E</b> o bien usarla precavidamente.
        </li>
        <li>
             <b>Wardear</b> ya que somos muy vulnerables a enemigos que se lancen y no podamos usar la <b>E</b>.
        </li>
        <li>
            <b>Roamear</b> mucho con la <b>W</b> para poder ayudar al team y sacar más gold.    
        </li>
        `,
        counters: [
          {
            nombre: "Jayce",
            tips: `
            <li>Empezar con <b>escudo</b> y pedir gank <b>early</b> ya que suelen pushear mucho.</li>
            <li>Estar atento de cuando cambia a rango que es muy <b>vulnerable</b>.</li>
             <li>En nivel <b>7/8/9</b> hay que empezar a pokearlo con la primera <b>Q</b>.</li>
            <li>Rushear <b>tabis</b> o te caga a piñas.</li>
            `,
          },
          {
            nombre: "Fiora",
            tips: `
            <li>Empezar con <b>escudo</b> y pedir gank <b>early</b> ya que suelen pushear mucho.</li>
            <li>Estar atento de cuando cambia a rango que es muy <b>vulnerable</b>.</li>
             <li>En nivel <b>7/8/9</b> hay que empezar a pokearlo con la primera <b>Q</b>.</li>
            <li>Rushear <b>tabis</b> o te caga a piñas.</li>
            `,
          },
          {
            nombre: "Renekton",
            tips: `
            <li>Empezar con <b>escudo</b> y pedir gank <b>early</b> ya que suelen pushear mucho.</li>
            <li>Estar atento de cuando cambia a rango que es muy <b>vulnerable</b>.</li>
             <li>En nivel <b>7/8/9</b> hay que empezar a pokearlo con la primera <b>Q</b>.</li>
            <li>Rushear <b>tabis</b> o te caga a piñas.</li>
            `,
          },
          {
            nombre: "Sett",
            tips: `
            <li>Empezar con <b>escudo</b> y pedir gank <b>early</b> ya que suelen pushear mucho.</li>
            <li>Estar atento de cuando cambia a rango que es muy <b>vulnerable</b>.</li>
             <li>En nivel <b>7/8/9</b> hay que empezar a pokearlo con la primera <b>Q</b>.</li>
            <li>Rushear <b>tabis</b> o te caga a piñas.</li>
            `,
          },
        ],
        easy: [
          {
            nombre: "Camille",
            tips: `
            <li>Empezar con <b>escudo</b> y pedir gank <b>early</b> ya que suelen pushear mucho.</li>
            <li>Estar atento de cuando cambia a rango que es muy <b>vulnerable</b>.</li>
             <li>En nivel <b>7/8/9</b> hay que empezar a pokearlo con la primera <b>Q</b>.</li>
            <li>Rushear <b>tabis</b> o te caga a piñas.</li>
            `,
          },
          {
            nombre: "Sylas",
            tips: `
            <li>Empezar con <b>escudo</b> y pedir gank <b>early</b> ya que suelen pushear mucho.</li>
            <li>Estar atento de cuando cambia a rango que es muy <b>vulnerable</b>.</li>
             <li>En nivel <b>7/8/9</b> hay que empezar a pokearlo con la primera <b>Q</b>.</li>
            <li>Rushear <b>tabis</b> o te caga a piñas.</li>
            `,
          },
          {
            nombre: "Irelia",
            tips: `
            <li>Empezar con <b>escudo</b> y pedir gank <b>early</b> ya que suelen pushear mucho.</li>
            <li>Estar atento de cuando cambia a rango que es muy <b>vulnerable</b>.</li>
             <li>En nivel <b>7/8/9</b> hay que empezar a pokearlo con la primera <b>Q</b>.</li>
            <li>Rushear <b>tabis</b> o te caga a piñas.</li>
            `,
          },
          {
            nombre: "Gnar",
            tips: `
            <li>Empezar con <b>escudo</b> y pedir gank <b>early</b> ya que suelen pushear mucho.</li>
            <li>Estar atento de cuando cambia a rango que es muy <b>vulnerable</b>.</li>
             <li>En nivel <b>7/8/9</b> hay que empezar a pokearlo con la primera <b>Q</b>.</li>
            <li>Rushear <b>tabis</b> o te caga a piñas.</li>
            `,
          },
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
        rol: mage,
        tips: `
        <li>
             En <b>late</b> no gasten la <b>Q</b> en la wave, sino en pokear al enemigo.
        </li>
        <li>
            Tratar de cancelar la animación del básico con la <b>E</b>.
        </li>
        <li>
             Utilizar la <b>E</b> al final de la animación de la <b>Q</b> para poder golpear la
            2° más fácil.
        </li>
        <li>
             Si no van a pegar la <b>Q</b> dejen que se vaya el cooldown así la tienen más
             rápido.
        </li>
        `,
        counters: [
          {
            nombre: "Aatrox",
            tips: `
            <li>Empezar con <b>escudo</b> y pedir gank <b>early</b> ya que suelen pushear mucho.</li>
            <li>Estar atento de cuando cambia a rango que es muy <b>vulnerable</b>.</li>
             <li>En nivel <b>7/8/9</b> hay que empezar a pokearlo con la primera <b>Q</b>.</li>
            <li>Rushear <b>tabis</b> o te caga a piñas.</li>
            `,
          },
          {
            nombre: "Jayce",
            tips: `
            <li>Empezar con <b>escudo</b> y pedir gank <b>early</b> ya que suelen pushear mucho.</li>
            <li>Estar atento de cuando cambia a rango que es muy <b>vulnerable</b>.</li>
             <li>En nivel <b>7/8/9</b> hay que empezar a pokearlo con la primera <b>Q</b>.</li>
            <li>Rushear <b>tabis</b> o te caga a piñas.</li>
            `,
          },
          {
            nombre: "Riven",
            tips: `
            <li>Empezar con <b>escudo</b> y pedir gank <b>early</b> ya que suelen pushear mucho.</li>
            <li>Estar atento de cuando cambia a rango que es muy <b>vulnerable</b>.</li>
             <li>En nivel <b>7/8/9</b> hay que empezar a pokearlo con la primera <b>Q</b>.</li>
            <li>Rushear <b>tabis</b> o te caga a piñas.</li>
            `,
          },
          {
            nombre: "Irelia",
            tips: `
            <li>Empezar con <b>escudo</b> y pedir gank <b>early</b> ya que suelen pushear mucho.</li>
            <li>Estar atento de cuando cambia a rango que es muy <b>vulnerable</b>.</li>
             <li>En nivel <b>7/8/9</b> hay que empezar a pokearlo con la primera <b>Q</b>.</li>
            <li>Rushear <b>tabis</b> o te caga a piñas.</li>
            `,
          },
        ],
        easy: [
          {
            nombre: "Ornn",
            tips: `
            <li>Empezar con <b>escudo</b> y pedir gank <b>early</b> ya que suelen pushear mucho.</li>
            <li>Estar atento de cuando cambia a rango que es muy <b>vulnerable</b>.</li>
             <li>En nivel <b>7/8/9</b> hay que empezar a pokearlo con la primera <b>Q</b>.</li>
            <li>Rushear <b>tabis</b> o te caga a piñas.</li>
            `,
          },
          {
            nombre: "Shen",
            tips: `
            <li>Empezar con <b>escudo</b> y pedir gank <b>early</b> ya que suelen pushear mucho.</li>
            <li>Estar atento de cuando cambia a rango que es muy <b>vulnerable</b>.</li>
             <li>En nivel <b>7/8/9</b> hay que empezar a pokearlo con la primera <b>Q</b>.</li>
            <li>Rushear <b>tabis</b> o te caga a piñas.</li>
            `,
          },
          {
            nombre: "Gangplank",
            tips: `
            <li>Empezar con <b>escudo</b> y pedir gank <b>early</b> ya que suelen pushear mucho.</li>
            <li>Estar atento de cuando cambia a rango que es muy <b>vulnerable</b>.</li>
             <li>En nivel <b>7/8/9</b> hay que empezar a pokearlo con la primera <b>Q</b>.</li>
            <li>Rushear <b>tabis</b> o te caga a piñas.</li>
            `,
          },
          {
            nombre: "Malphite",
            tips: `
            <li>Empezar con <b>escudo</b> y pedir gank <b>early</b> ya que suelen pushear mucho.</li>
            <li>Estar atento de cuando cambia a rango que es muy <b>vulnerable</b>.</li>
             <li>En nivel <b>7/8/9</b> hay que empezar a pokearlo con la primera <b>Q</b>.</li>
            <li>Rushear <b>tabis</b> o te caga a piñas.</li>
            `,
          },
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
          "ShieldBow.png",
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
        rol: fighter,
        tips: `
        <li>
            En <b>early</b> abusar mucho del rango y el daño que hace nuestra pasiva + la runa.
        </li>
        <li>
            Guardarse la <b>E</b> o bien usarla precavidamente.
        </li>
        <li>
             <b>Wardear</b> ya que somos muy vulnerables a enemigos que se lancen y no podamos usar la <b>E</b>.
        </li>
        <li>
            <b>Roamear</b> mucho con la <b>W</b> para poder ayudar al team y sacar más gold.    
        </li>
        `,
        counters: [
          {
            nombre: "Lucian",
            tips: `
            <li>Empezar con <b>escudo</b> y pedir gank <b>early</b> ya que suelen pushear mucho.</li>
            <li>Estar atento de cuando cambia a rango que es muy <b>vulnerable</b>.</li>
             <li>En nivel <b>7/8/9</b> hay que empezar a pokearlo con la primera <b>Q</b>.</li>
            <li>Rushear <b>tabis</b> o te caga a piñas.</li>
            `,
          },
          {
            nombre: "Irelia",
            tips: `
            <li>Empezar con <b>escudo</b> y pedir gank <b>early</b> ya que suelen pushear mucho.</li>
            <li>Estar atento de cuando cambia a rango que es muy <b>vulnerable</b>.</li>
             <li>En nivel <b>7/8/9</b> hay que empezar a pokearlo con la primera <b>Q</b>.</li>
            <li>Rushear <b>tabis</b> o te caga a piñas.</li>
            `,
          },
          {
            nombre: "Kled",
            tips: `
            <li>Empezar con <b>escudo</b> y pedir gank <b>early</b> ya que suelen pushear mucho.</li>
            <li>Estar atento de cuando cambia a rango que es muy <b>vulnerable</b>.</li>
             <li>En nivel <b>7/8/9</b> hay que empezar a pokearlo con la primera <b>Q</b>.</li>
            <li>Rushear <b>tabis</b> o te caga a piñas.</li>
            `,
          },
          {
            nombre: "Darius",
            tips: `
            <li>Empezar con <b>escudo</b> y pedir gank <b>early</b> ya que suelen pushear mucho.</li>
            <li>Estar atento de cuando cambia a rango que es muy <b>vulnerable</b>.</li>
             <li>En nivel <b>7/8/9</b> hay que empezar a pokearlo con la primera <b>Q</b>.</li>
            <li>Rushear <b>tabis</b> o te caga a piñas.</li>
            `,
          },
        ],
        easy: [
          {
            nombre: "Gnar",
            tips: `
            <li>Empezar con <b>escudo</b> y pedir gank <b>early</b> ya que suelen pushear mucho.</li>
            <li>Estar atento de cuando cambia a rango que es muy <b>vulnerable</b>.</li>
             <li>En nivel <b>7/8/9</b> hay que empezar a pokearlo con la primera <b>Q</b>.</li>
            <li>Rushear <b>tabis</b> o te caga a piñas.</li>
            `,
          },
          {
            nombre: "Sylas",
            tips: `
            <li>Empezar con <b>escudo</b> y pedir gank <b>early</b> ya que suelen pushear mucho.</li>
            <li>Estar atento de cuando cambia a rango que es muy <b>vulnerable</b>.</li>
             <li>En nivel <b>7/8/9</b> hay que empezar a pokearlo con la primera <b>Q</b>.</li>
            <li>Rushear <b>tabis</b> o te caga a piñas.</li>
            `,
          },
          {
            nombre: "Ornn",
            tips: `
            <li>Empezar con <b>escudo</b> y pedir gank <b>early</b> ya que suelen pushear mucho.</li>
            <li>Estar atento de cuando cambia a rango que es muy <b>vulnerable</b>.</li>
             <li>En nivel <b>7/8/9</b> hay que empezar a pokearlo con la primera <b>Q</b>.</li>
            <li>Rushear <b>tabis</b> o te caga a piñas.</li>
            `,
          },
          {
            nombre: "Sett",
            tips: `
            <li>Empezar con <b>escudo</b> y pedir gank <b>early</b> ya que suelen pushear mucho.</li>
            <li>Estar atento de cuando cambia a rango que es muy <b>vulnerable</b>.</li>
             <li>En nivel <b>7/8/9</b> hay que empezar a pokearlo con la primera <b>Q</b>.</li>
            <li>Rushear <b>tabis</b> o te caga a piñas.</li>
            `,
          },
        ],
      },
      {
        nombre: "Gnar",
        titulo: "SHU SHU BANA",
        summoners: {
          sum_1: "SummonerTeleport.png",
          sum_2: "SummonerFlash.png",
        },
        items: [
          "Sunderer.png",
          "Black.png",
          "Sterakk.png",
          "WitEnds.png",
          "DD.png",
          "Tabis.png",
        ],
        priority: ["Q", "E", "W"],
        abilities: ["Q", "W", "E", "R", "_Passive"],
        arbol: ["Resolve", "Domination"],
        mastery: [2, 1, 3, 1, 2, 0, 1, 2, 1, 2],
        order: [
          [1, 4, 5, 7, 9],
          [2, 8, 10, 12, 13],
          [3, 14, 15, 17, 18],
          [6, 11, 16],
        ],
        rol: fighter,
        tips: `
        <li>
            En <b>early</b> abusar mucho del rango y el daño que hace nuestra pasiva + la runa.
        </li>
        <li>
            Guardarse la <b>E</b> o bien usarla precavidamente.
        </li>
        <li>
             <b>Wardear</b> ya que somos muy vulnerables a enemigos que se lancen y no podamos usar la <b>E</b>.
        </li>
        <li>
            <b>Roamear</b> mucho con la <b>W</b> para poder ayudar al team y sacar más gold.    
        </li>
        `,
        counters: [
          {
            nombre: "Gangplank",
            tips: `
            <li>Empezar con <b>escudo</b> y pedir gank <b>early</b> ya que suelen pushear mucho.</li>
            <li>Estar atento de cuando cambia a rango que es muy <b>vulnerable</b>.</li>
             <li>En nivel <b>7/8/9</b> hay que empezar a pokearlo con la primera <b>Q</b>.</li>
            <li>Rushear <b>tabis</b> o te caga a piñas.</li>
            `,
          },
          {
            nombre: "Jayce",
            tips: `
            <li>Empezar con <b>escudo</b> y pedir gank <b>early</b> ya que suelen pushear mucho.</li>
            <li>Estar atento de cuando cambia a rango que es muy <b>vulnerable</b>.</li>
             <li>En nivel <b>7/8/9</b> hay que empezar a pokearlo con la primera <b>Q</b>.</li>
            <li>Rushear <b>tabis</b> o te caga a piñas.</li>
            `,
          },
          {
            nombre: "Irelia",
            tips: `
            <li>Empezar con <b>escudo</b> y pedir gank <b>early</b> ya que suelen pushear mucho.</li>
            <li>Estar atento de cuando cambia a rango que es muy <b>vulnerable</b>.</li>
             <li>En nivel <b>7/8/9</b> hay que empezar a pokearlo con la primera <b>Q</b>.</li>
            <li>Rushear <b>tabis</b> o te caga a piñas.</li>
            `,
          },
          {
            nombre: "Sylas",
            tips: `
            <li>Empezar con <b>escudo</b> y pedir gank <b>early</b> ya que suelen pushear mucho.</li>
            <li>Estar atento de cuando cambia a rango que es muy <b>vulnerable</b>.</li>
             <li>En nivel <b>7/8/9</b> hay que empezar a pokearlo con la primera <b>Q</b>.</li>
            <li>Rushear <b>tabis</b> o te caga a piñas.</li>
            `,
          },
        ],
        easy: [
          {
            nombre: "Kled",
            tips: `
            <li>Empezar con <b>escudo</b> y pedir gank <b>early</b> ya que suelen pushear mucho.</li>
            <li>Estar atento de cuando cambia a rango que es muy <b>vulnerable</b>.</li>
             <li>En nivel <b>7/8/9</b> hay que empezar a pokearlo con la primera <b>Q</b>.</li>
            <li>Rushear <b>tabis</b> o te caga a piñas.</li>
            `,
          },
          {
            nombre: "Riven",
            tips: `
            <li>Empezar con <b>escudo</b> y pedir gank <b>early</b> ya que suelen pushear mucho.</li>
            <li>Estar atento de cuando cambia a rango que es muy <b>vulnerable</b>.</li>
             <li>En nivel <b>7/8/9</b> hay que empezar a pokearlo con la primera <b>Q</b>.</li>
            <li>Rushear <b>tabis</b> o te caga a piñas.</li>
            `,
          },
          {
            nombre: "Sett",
            tips: `
            <li>Empezar con <b>escudo</b> y pedir gank <b>early</b> ya que suelen pushear mucho.</li>
            <li>Estar atento de cuando cambia a rango que es muy <b>vulnerable</b>.</li>
             <li>En nivel <b>7/8/9</b> hay que empezar a pokearlo con la primera <b>Q</b>.</li>
            <li>Rushear <b>tabis</b> o te caga a piñas.</li>
            `,
          },
          {
            nombre: "Renekton",
            tips: `
            <li>Empezar con <b>escudo</b> y pedir gank <b>early</b> ya que suelen pushear mucho.</li>
            <li>Estar atento de cuando cambia a rango que es muy <b>vulnerable</b>.</li>
             <li>En nivel <b>7/8/9</b> hay que empezar a pokearlo con la primera <b>Q</b>.</li>
            <li>Rushear <b>tabis</b> o te caga a piñas.</li>
            `,
          },
        ],
      },
    ];

    createCards(champions);
    myData();

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
        {
          nombre: "Domination",
          maestrias: [
            "",
            "assets/Runas/Grasp.png",
            "assets/Runas/After.png",
            "",
            "assets/Runas/CheapShot.png",
            "assets/Runas/TasteOfBlood.png",
            "assets/Runas/SuddenImpact.png",
            "assets/Runas/ZombieWard.png",
            "assets/Runas/GhostPoro.png",
            "assets/Runas/EyeballCollection.png",
            "assets/Runas/RavenousHunter.png",
            "assets/Runas/IngeniousHunter.png",
            "assets/Runas/RelentlessHunter.png",
            "assets/Runas/UltimateHunter.png",
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
        skins(campeon);
        countersData(campeon);
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
    `background-image: radial-gradient( 600px 230px at 60% 35%, rgb(0 0 0 / 10%) 0%, rgb(7 7 32) 100% ), linear-gradient(
90deg, rgb(11 11 28 / 61%) 0%, rgb(7 7 32 / 40%) 100%),
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

      if (
        runes[i].nombre !== "Domination" &&
        $secMaestrias[9].classList.contains("fake-none")
      ) {
        for (let x = 4; x < secMastery.length; x++) {
          $secMaestrias[x - 4].firstElementChild.setAttribute(
            "src",
            secMastery[x]
          );
        }
      } else if (
        runes[i].nombre !== "Domination" &&
        !$secMaestrias[9].classList.contains("fake-none")
      ) {
        $secMaestrias[9].classList.add("fake-none");
        for (let x = 4; x < secMastery.length; x++) {
          $secMaestrias[x - 4].firstElementChild.setAttribute(
            "src",
            secMastery[x]
          );
        }
      }
      if (
        runes[i].nombre === "Domination" &&
        $secMaestrias[9].classList.contains("fake-none")
      ) {
        $secMaestrias[9].classList.remove("fake-none");
        for (let x = 4; x < secMastery.length; x++) {
          $secMaestrias[x - 4].firstElementChild.setAttribute(
            "src",
            secMastery[x]
          );
        }
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
    let test = campeon.order[i],
      campeonOrder = campeon.order[i],
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

  async function cartas() {
    for (let i = 0; i < nombres.length; i++) {
      await fetch(`${apiChamps}${nombres[i]}.json`)
        .then((res) => (res.ok ? res.json() : Promise.reject(res)))

        .then((json) => {
          const imgAPI =
            "https://ddragon.leagueoflegends.com/cdn/11.18.1/img/champion/";
          let campeones = json.data,
            champs = Object.values(campeones);

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
  cartas();
}

function skins(campeon) {
  const $splashSection = document.querySelector(".carrousel__slides"),
    $fragment = document.createDocumentFragment();

  async function sliders() {
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
        numNombre = [];

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
        while (
          $splashSection.firstElementChild.classList.contains(
            "carrousel__slide"
          )
        ) {
          $splashSection.firstElementChild.remove();
        }

        const $newSlide = document.createElement("div"),
          $img = document.createElement("img"),
          $h3 = document.createElement("h3");
        $newSlide.classList.add("carrousel__slide");
        $img.setAttribute("src", `${splashAPI}${champNick}_${key[1]}.jpg`);
        $img.setAttribute("href", `${key[0]}`);
        $h3.textContent = `${key[0]}`;
        $newSlide.appendChild($img);
        $newSlide.appendChild($h3);
        $fragment.appendChild($newSlide);
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

async function countersData(campeon) {
  const d = document;
  const champNick = campeon.nombre,
    $champName = d.querySelector(".champ__data--name h2"),
    $champRol = d.querySelector(".champ__data--name .stat__data p"),
    $champRolSvg = d.querySelector(".champ__data--name .stat__data svg"),
    $tipsList = d.querySelector(".tips__list ul");

  const $hp = d.getElementById("hp"),
    $attack = d.getElementById("attack"),
    $attackS = d.getElementById("attackS"),
    $ms = d.getElementById("ms"),
    $armor = d.getElementById("armor"),
    $mr = d.getElementById("mr");
  $level = d.getElementById("level");

  const $champImg = d.querySelector(".champ__data img"),
    $summaryHard = d.querySelectorAll(".hard summary"),
    $article = d.querySelectorAll(".hard article"),
    $summaryEasy = d.querySelectorAll(".easy summary"),
    $articleEasy = d.querySelectorAll(".easy article");

  // El nombre y rol del champ
  $champName.textContent = champNick;
  $champRolSvg.innerHTML = campeon.rol;
  $tipsList.innerHTML = campeon.tips;

  try {
    const champsAPI =
        "https://ddragon.leagueoflegends.com/cdn/11.18.1/data/en_US/champion/",
      loadingAPI =
        "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/",
      squareAPI =
        "https://ddragon.leagueoflegends.com/cdn/11.18.1/img/champion/";

    let promise,
      campeonesData = [],
      tags,
      stats;

    for (let i = 0; i < 1; i++) {
      promise = await fetch(`${champsAPI}${champNick}.json`);
      campeonesData.push(await promise.json());
    }

    for (let i = 0; i < campeonesData.length; i++) {
      tags = await campeonesData[i]["data"][`${champNick}`]["tags"][0];
      stats = await campeonesData[i]["data"][`${champNick}`]["stats"];
    }

    // Para cambiar los matchups

    for (let i = 0; i < $summaryHard.length; i++) {
      // Counters
      $summaryHard[i].firstElementChild.setAttribute(
        "src",
        `${squareAPI}${campeon.counters[i].nombre}.png`
      );
      $summaryHard[i].firstElementChild.setAttribute(
        "alt",
        campeon.counters[i].nombre
      );
      $summaryHard[i].lastElementChild.textContent = campeon.counters[i].nombre;
      $article[i].firstElementChild.innerHTML = campeon.counters[i].tips;

      // Easy
      $summaryEasy[i].firstElementChild.setAttribute(
        "src",
        `${squareAPI}${campeon.easy[i].nombre}.png`
      );
      $summaryEasy[i].firstElementChild.setAttribute(
        "alt",
        campeon.easy[i].nombre
      );
      $summaryEasy[i].lastElementChild.textContent = campeon.easy[i].nombre;
      $articleEasy[i].firstElementChild.innerHTML = campeon.easy[i].tips;
    }

    // Estadísticas y para subir el nivel
    $champRol.textContent = tags;

    $hp.textContent = stats.hp;
    $attack.textContent = stats.attackdamage;
    $attackS.textContent = stats.attackspeed;
    $ms.textContent = stats.movespeed;
    $armor.textContent = stats.armor;
    $mr.textContent = stats.spellblock;

    $level.addEventListener("input", function () {
      let nivel = $level.value,
        hp = stats.hpperlevel,
        attack = stats.attackdamageperlevel,
        armor = stats.armorperlevel,
        attackS = stats.attackspeedperlevel,
        mr = stats.spellblockperlevel;

      if (nivel >= 1 && nivel <= 18) {
        $hp.textContent = (stats.hp + (nivel - 1) * hp).toFixed(0);
        $attack.textContent = (
          stats.attackdamage +
          (nivel - 1) * attack
        ).toFixed(0);
        $attackS.textContent = (
          stats.attackspeed +
          (nivel - 1) * ((stats.attackspeed * attackS) / 100)
        ).toFixed(2);

        $armor.textContent = (stats.armor + (nivel - 1) * armor).toFixed(0);
        $mr.textContent = (stats.spellblock + (nivel - 1) * mr).toFixed(0);
      }
    });
    $level.value = 1;

    // Para la imagen responsive
    let breakpoint = window.matchMedia("(min-width: 855px)");

    const responsive = (e) => {
      if (e.matches) {
        $champImg.setAttribute("src", `${loadingAPI}${champNick}_0.jpg`);
      } else {
        $champImg.setAttribute("src", `${squareAPI}${champNick}.png`);
      }
    };
    // Valida el cambio de MQ
    breakpoint.addEventListener("change", responsive);
    responsive(breakpoint);
  } catch (err) {
    console.log(err);
  }
}

async function myData() {
  let win = document.querySelector(".win"),
    losses = document.querySelector(".losses"),
    lp = document.querySelector(".lp");
  let res = await fetch(
      "https://la2.api.riotgames.com/lol/summoner/v4/summoners/by-name/Mirato?api_key=RGAPI-014d717d-3486-4813-97f9-b9d492475497"
    ),
    json = await res.json();

  let rank = await fetch(
      "https://la2.api.riotgames.com/lol/league/v4/entries/by-summoner/ZdBOFiDYRWWGbjpmGts8rgP2ZsZl8MNRzvpujGXOHr6H?api_key=RGAPI-014d717d-3486-4813-97f9-b9d492475497"
    ),
    rankJson = await rank.json();

  win.textContent = `${rankJson[0].wins} V`;
  losses.textContent = `${rankJson[0].losses} D`;
  lp.textContent = `${rankJson[0].leaguePoints} LP`;

  console.log(json);
  console.log(rankJson[0]);
}

const fighter = `<path d="M67.84 56.35v5.5c8.62-8.62 14.37 0 14.37 0C112.14 40.78 90.35 2 90.35 2s-.72 17.24-15.08 27.77v16.52c-.24 4.79-3.84 7.9-7.43 10.06M17.79 62.09s4.07-6.46 10.78-2.63L20.91 48.2l6.7-16c-17.24-10.54-18-29.93-18-29.93S-12.14 41 17.79 62.09M26.89 83.89l5.51-18.68-.24-.48L19.23 77.9A17.78 17.78 0 017.5 83.17H3l-1 2.39 12 11.5zM92.27 83.89a16.24 16.24 0 01-11.74-5.27L68.8 66.88l3.83 17.72L85.8 98l12-11.49-1-2.4zM55.87 42.7c0 .24-.24.48-.24.71h.72c5.75.48 7.66 2.64 9.1 7.67a9.35 9.35 0 002.39-1.92c1-1 1.68-1.67 1.68-2.63V28.09a2 2 0 00-1.68-1.92l-31.37-5.74H36a2.39 2.39 0 00-2.39 2.39v6.71l24.9 3.35z" fill="#D0A85C"></path><path d="M60.18 54c-1.2-5.27-1.44-4.55-5.75-4.79L40.78 48v-3.87h5.51A4.09 4.09 0 0050.36 41l1-3.35L32.4 35l-5 12.22 11.74 17-5.54 18.47L49.88 98l16.53-15.07s-6.23-28.5-6.23-29M49.88 2.23l-4.79 10.29 4.79 3.83 4.79-3.83zM62.1 9.41l1.43 6h6l2.87-11zM30.25 15.4h6l.24-.72 1.2-5.27-10.3-5z" fill="#D0A85C"></path>
  `,
  mage = `<path d="M84.48 77.3h13.41l-3.83-12.93h-9.58a36.73 36.73 0 00-27.54 12.45L50 85l-6.94-8.14a36.73 36.73 0 00-27.54-12.49H5.94L2.11 77.3h13.41a36.73 36.73 0 0127.54 12.45l.71.72h-9.1v7.42h30.9v-7.42h-9.1l.71-.72a35.85 35.85 0 0127.3-12.45" fill="#D0A85C"></path><path d="M56.23 54.31L50 62.21l-6.23-7.9a5.42 5.42 0 01-.24-6.47L50 37.31l6.47 10.53a5.42 5.42 0 01-.24 6.47M42.58 28.93l-7.91 12.69a13.37 13.37 0 00.72 15.09L50 75.14l14.61-18.43a13 13 0 00.72-15.09L50 17l-.48.72a5.58 5.58 0 01-4.31 1.68c-4.07 0-7.18-8.62 4.55-17.24 0 0-28.74 5.5-14.85 30.41z" fill="#D0A85C"></path>`,
  assassin = `<path d="M56.59 73.71l1.67-2.88c5.75-9.34 5.51-16 3.83-20.59a39.78 39.78 0 01-9.1 16 2 2 0 01-1.43.48H48.2a2.17 2.17 0 01-1.67-.72 39.78 39.78 0 01-9.1-16c-1.68 4.55-1.68 11.26 3.83 20.59l1.68 2.88-3.36 5.75 10.06 17.72L59.7 79.22z" fill="#D0A85C"></path><path d="M73.11 38.74c-3.35-4.31-6-10-6-18.91 0-4.07-3.59-8.15-7.66-12-4.79-4.31-5.75-5.74-9.58-5.74s-4.79 1.43-9.34 5.74c-4.07 3.83-7.66 7.91-7.66 12 0 8.86-2.88 14.6-6 18.68L12.76 52.87 2.23 45.69v12.93S2.47 84 39.58 97.89c0 0-14.13-7.18-16.28-31.13-.24-1.67-.24-9.1-.24-10.29A119.77 119.77 0 0036.71 74c-.72-1.2-1.44-2.64-2.16-3.83-5-10.54-4.07-18.2-1.67-23.47a22.77 22.77 0 017.42-8.86l9.58 9.58 9.58-9.58a22.77 22.77 0 017.42 8.86c2.4 5.27 3.59 12.93-1.43 23.23-.72 1.38-1.45 2.58-2.16 4.07a119.77 119.77 0 0013.65-17.53c0 1.19 0 8.62-.24 10.29-2.39 23.95-16.28 31.13-16.28 31.13C97.53 84 97.77 58.62 97.77 58.62V45.69l-10.53 7.18z" fill="#D0A85C"></path>`,
  marksman = `<path d="M28.69 27.25h6.94l1.92-6.94-13.41-7.91zM71.31 27.25l4.55-14.85-13.41 7.91 1.92 6.94zM71.31 35.39c-1.43 0-12.21-3.83-12.21-3.83L50 42.34l-9.1-10.78s-10.54 3.83-12.21 3.83c-7.67 0-4.79-7.18-4.79-7.18S4.26 48.32 2.11 64.13c0 0 5.74-8.86 24.42-13.17a26.22 26.22 0 0013.89 12.93c-.72-3.11-1.44-6.71-2.15-10.06a22.36 22.36 0 01-3.84-4.31c.72 0 7.19-.72 8.15-.72.71 2.64 4.55 28.74 4.55 28.74l-7 10.3v10L50 93.82l9.82 4.07V87.6l-7-10.3s3.84-26.1 4.55-28.74c.72 0 7.19.72 8.15.72a16.52 16.52 0 01-3.84 4.31 98.08 98.08 0 00-2.15 10.06 25.33 25.33 0 0013.94-12.93c18.68 4.55 24.42 13.17 24.42 13.17C95.74 48.32 76.1 28 76.1 28s2.88 7.42-4.79 7.42" fill="#D0A85C"></path><path d="M50 2.11l-7.66 21.31h.24L50 33.24l7.42-9.82h.24z" fill="#D0A85C"></path>`;

const champions = [
  {
    nombre: "Aatrox",
    titulo: "EL DEMONIO PAPÁ",
    summoners: {
      sum_1: "SummonerTeleport",
      sum_2: "SummonerFlash",
    },
    items: [
      "Goredrinker.png",
      "Sterakk.png",
      "DD.png",
      "GA.png",
      "Chemptank.png",
      "Tabis.png",
    ],
    priority: [
      {
        orden: ["Q", "E", "W"],
        skill: ["AatroxQ.png", "AatroxE.png", "AatroxW.png"],
      },
    ],
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
      sum_1: "SummonerTeleport",
      sum_2: "SummonerFlash",
    },
    items: [
      "Kraken.png",
      "Collector.png",
      "Infinity.png",
      "Dominik.png",
      "GA.png",
      "Berseker.png",
    ],
    priority: [
      {
        orden: ["E", "Q", "W"],
        skill: ["AkshanE.png", "AkshanQ.png", "AkshanW.png"],
      },
    ],
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
      sum_1: "SummonerTeleport",
      sum_2: "SummonerFlash",
    },
    items: [
      "Everfrost.png",
      "Cosmic.png",
      "Zhonyas.png",
      "Deathcap.png",
      "Morello.png",
      "Ionia.png",
    ],
    priority: [
      {
        orden: ["W", "Q", "E"],
        skill: ["SylasW.png", "SylasQ.png", "SylasE.png"],
      },
    ],
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
      sum_1: "SummonerTeleport",
      sum_2: "SummonerFlash",
    },
    items: [
      "Goredrinker.png",
      "Black.png",
      "Sterakk.png",
      "DD.png",
      "GA.png",
      "Tabis.png",
    ],
    priority: [
      {
        orden: ["Q", "E", "W"],
        skill: ["RivenTriCleave.png", "RivenFeint.png", "RivenMartyr.png"],
      },
    ],
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
      sum_1: "SummonerTeleport",
      sum_2: "SummonerFlash",
    },
    items: [
      "Goredrinker.png",
      "Sterakk.png",
      "Hydra.png",
      "DD.png",
      "GA.png",
      "Tabis.png",
    ],
    priority: [
      {
        orden: ["Q", "W", "E"],
        skill: ["KledQ.png", "KledW.png", "KledE.png"],
      },
    ],
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
      sum_1: "SummonerTeleport",
      sum_2: "SummonerDot",
    },
    items: [
      "Sunderer.png",
      "Sterakk.png",
      "Hydra.png",
      "DD.png",
      "GA.png",
      "Tabis.png",
    ],
    priority: [
      {
        orden: ["Q", "E", "W"],
        skill: ["CamilleQ.png", "CamilleE.png", "CamilleW.png"],
      },
    ],
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
      sum_1: "SummonerTeleport",
      sum_2: "SummonerDot",
    },
    items: [
      "Protobelt.png",
      "Zhonyas.png",
      "Deathcap.png",
      "VoidStaff.png",
      "Morello.png",
      "Sorcerer.png",
    ],
    priority: [
      {
        orden: ["Q", "E", "W"],
        skill: ["AkaliQ.png", "AkaliE.png", "AkaliW.png"],
      },
    ],
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
      sum_1: "SummonerTeleport",
      sum_2: "SummonerFlash",
    },
    items: [
      "Goredrinker.png",
      "Sterakk.png",
      "Reaver.png",
      "DD.png",
      "GA.png",
      "Tabis.png",
    ],
    priority: [
      {
        orden: ["Q", "E", "W"],
        skill: ["FioraQ.png", "FioraE.png", "FioraW.png"],
      },
    ],
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
      sum_1: "SummonerTeleport",
      sum_2: "SummonerDot",
    },
    items: [
      "Riftmaker.png",
      "Cosmic.png",
      "Zhonyas.png",
      "Nashor.png",
      "Morello.png",
      "Ionia.png",
    ],
    priority: [
      {
        orden: ["Q", "E", "W"],
        skill: ["GwenQ.png", "GwenE.png", "GwenW.png"],
      },
    ],
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
      sum_1: "SummonerTeleport",
      sum_2: "SummonerFlash",
    },
    items: [
      "Eclipse.png",
      "Muramana.png",
      "Serpent.png",
      "Serylda.png",
      "GA.png",
      "Ionia.png",
    ],
    priority: [
      {
        orden: ["Q", "E", "W"],
        skill: [
          "JayceToTheSkies.png",
          "JayceThunderingBlow.png",
          "JayceStaticField.png",
        ],
      },
    ],
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
      sum_1: "SummonerTeleport",
      sum_2: "SummonerFlash",
    },
    items: [
      "Goredrinker.png",
      "Sterakk.png",
      "DD.png",
      "GA.png",
      "Chemptank.png",
      "Tabis.png",
    ],
    priority: [
      {
        orden: ["E", "Q", "W"],
        skill: ["BlindMonkEOne.png", "BlindMonkQOne.png", "BlindMonkWOne.png"],
      },
    ],
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
      sum_1: "SummonerTeleport",
      sum_2: "SummonerFlash",
    },
    items: [
      "Protobelt.png",
      "Cosmic.png",
      "Deathcap.png",
      "Zhonyas.png",
      "VoidStaff.png",
      "Sorcerer.png",
    ],
    priority: [
      {
        orden: ["Q", "E", "W"],
        skill: ["VladimirQ.png", "VladimirE.png", "VladimirSanguinePool.png"],
      },
    ],
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
      sum_1: "SummonerTeleport",
      sum_2: "SummonerFlash",
    },
    items: [
      "ShieldBow.png",
      "Reaver.png",
      "Collector.png",
      "Infinity.png",
      "Dominik.png",
      "Ionia.png",
    ],
    priority: [
      {
        orden: ["Q", "E", "W"],
        skill: ["GangplankQWrapper.png", "GangplankE.png", "GangplankW.png"],
      },
    ],
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
    nombre: "Sett",
    titulo: "Mano a Mano",
    summoners: {
      sum_1: "SummonerTeleport",
      sum_2: "SummonerFlash",
    },
    items: [
      "Sunderer.png",
      "Black.png",
      "Sterakk.png",
      "WitEnds.png",
      "DD.png",
      "Tabis.png",
    ],
    priority: [
      {
        orden: ["Q", "W", "E"],
        skill: ["SettQ.png", "SettW.png", "SettE.png"],
      },
    ],
    arbol: ["Precision", "Resolve"],
    mastery: [4, 2, 1, 3, 0, 3, 1, 2, 1, 2],
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
  {
    nombre: "Kennen",
    titulo: "El Ninja enano",
    summoners: {
      sum_1: "SummonerTeleport",
      sum_2: "SummonerFlash",
    },
    items: [
      "Sunderer.png",
      "Black.png",
      "Sterakk.png",
      "WitEnds.png",
      "DD.png",
      "Tabis.png",
    ],
    priority: [
      {
        orden: ["Q", "W", "E"],
        skill: [
          "KennenShurikenHurlMissile1.png",
          "KennenBringTheLight.png",
          "KennenLightningRush.png",
        ],
      },
    ],
    arbol: ["Resolve", "Domination"],
    mastery: [2, 1, 3, 1, 2, 0, 1, 2, 1, 2],
    order: [
      [1, 4, 5, 7, 9],
      [2, 8, 10, 12, 13],
      [3, 14, 15, 17, 18],
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
  {
    nombre: "Gnar",
    titulo: "SHU SHU BANA",
    summoners: {
      sum_1: "SummonerTeleport",
      sum_2: "SummonerFlash",
    },
    items: [
      "Sunderer.png",
      "Black.png",
      "Sterakk.png",
      "WitEnds.png",
      "DD.png",
      "Tabis.png",
    ],
    priority: [
      {
        orden: ["Q", "E", "W"],
        skill: ["GnarQ.png", "GnarE.png", "GnarW.png"],
      },
    ],
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

const runes = [
  {
    nombre: "Resolve",
  },
  {
    nombre: "Inspiration",
  },
  {
    nombre: "Precision",
  },
  {
    nombre: "Sorcery",
  },
  {
    nombre: "Domination",
  },
];

export default {
  champions,
  runes,
};

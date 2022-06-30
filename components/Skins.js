export function skins(campeon) {
  const $splashSection = document.querySelector('.carrousel__slides'),
    $fragment = document.createDocumentFragment();

  async function sliders() {
    try {
      const champNick = campeon.nombre;
      const champsAPI =
          'https://ddragon.leagueoflegends.com/cdn/11.18.1/data/en_US/champion/',
        splashAPI =
          'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/';

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
        skins = await campeonesData[i]['data'][`${champNick}`]['skins'];
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
            'carrousel__slide'
          )
        ) {
          $splashSection.firstElementChild.remove();
        }

        const $newSlide = document.createElement('div'),
          $img = document.createElement('img'),
          $h3 = document.createElement('h3');
        $newSlide.classList.add('carrousel__slide');
        $img.setAttribute('src', `${splashAPI}${champNick}_${key[1]}.jpg`);
        $img.setAttribute('href', `${key[0]}`);
        $h3.textContent = `${key[0]}`;
        $newSlide.appendChild($img);
        $newSlide.appendChild($h3);
        $fragment.appendChild($newSlide);
      }

      $splashSection.prepend($fragment);
      $splashSection.firstElementChild.classList.add('active');

      const d = document;
      const $nextBtn = d.querySelector('.carrousel__btns .next'),
        $prevBtn = d.querySelector('.carrousel__btns .prev'),
        $slides = d.querySelectorAll('.carrousel__slide');

      let i = 0;

      d.addEventListener('click', (e) => {
        if (e.target === $prevBtn) {
          e.preventDefault();
          $slides[i].classList.remove('active');
          i--;

          if (i < 0) {
            i = $slides.length - 1;
          }

          $slides[i].classList.add('active');
        }
      });

      d.addEventListener('click', (e) => {
        if (e.target === $nextBtn) {
          e.preventDefault();
          $slides[i].classList.remove('active');
          i++;

          if (i >= $slides.length) {
            i = 0;
          }

          $slides[i].classList.add('active');
        }
      });
    } catch (err) {
      console.log(err);
    }
  }

  sliders(campeon);
}

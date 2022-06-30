import api from '../helpers/lol_api.js';

export async function countersData(campeon) {
	const d = document;
	const champNick = campeon.nombre,
		$champName = d.querySelector('.champ__data--name h2'),
		$champRol = d.querySelector('.champ__data--name .stat__data p'),
		$champRolSvg = d.querySelector('.champ__data--name .stat__data svg'),
		$tipsList = d.querySelector('.tips__list ul');

	const $hp = d.getElementById('hp'),
		$attack = d.getElementById('attack'),
		$attackS = d.getElementById('attackS'),
		$ms = d.getElementById('ms'),
		$armor = d.getElementById('armor'),
		$mr = d.getElementById('mr'),
		$level = d.getElementById('level');

	const $champImg = d.querySelector('.champ__data img'),
		$summaryHard = d.querySelectorAll('.hard summary'),
		$article = d.querySelectorAll('.hard article'),
		$summaryEasy = d.querySelectorAll('.easy summary'),
		$articleEasy = d.querySelectorAll('.easy article');

	// El nombre y rol del champ
	$champName.textContent = champNick;
	$champRolSvg.innerHTML = campeon.rol;
	$tipsList.innerHTML = campeon.tips;

	try {
		const champsAPI = api.DATACHAMP,
			loadingAPI = api.LOADING,
			squareAPI = api.SQUARE;

		let promise,
			campeonesData = [],
			tags,
			stats;

		for (let i = 0; i < 1; i++) {
			promise = await fetch(`${champsAPI}${champNick}.json`);
			campeonesData.push(await promise.json());
		}

		for (let i = 0; i < campeonesData.length; i++) {
			tags = await campeonesData[i]['data'][`${champNick}`]['tags'][0];
			stats = await campeonesData[i]['data'][`${champNick}`]['stats'];
		}

		// Para cambiar los matchups

		for (let i = 0; i < $summaryHard.length; i++) {
			// Counters
			$summaryHard[i].firstElementChild.setAttribute('src', `${squareAPI}${campeon.counters[i].nombre}.png`);
			$summaryHard[i].firstElementChild.setAttribute('alt', campeon.counters[i].nombre);
			$summaryHard[i].lastElementChild.textContent = campeon.counters[i].nombre;
			$article[i].firstElementChild.innerHTML = campeon.counters[i].tips;

			// Easy
			$summaryEasy[i].firstElementChild.setAttribute('src', `${squareAPI}${campeon.easy[i].nombre}.png`);
			$summaryEasy[i].firstElementChild.setAttribute('alt', campeon.easy[i].nombre);
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

		$level.addEventListener('input', function () {
			let nivel = $level.value,
				hp = stats.hpperlevel,
				attack = stats.attackdamageperlevel,
				armor = stats.armorperlevel,
				attackS = stats.attackspeedperlevel,
				mr = stats.spellblockperlevel;

			if (nivel >= 1 && nivel <= 18) {
				$hp.textContent = (stats.hp + (nivel - 1) * hp).toFixed(0);
				$attack.textContent = (stats.attackdamage + (nivel - 1) * attack).toFixed(0);
				$attackS.textContent = (stats.attackspeed + (nivel - 1) * ((stats.attackspeed * attackS) / 100)).toFixed(2);

				$armor.textContent = (stats.armor + (nivel - 1) * armor).toFixed(0);
				$mr.textContent = (stats.spellblock + (nivel - 1) * mr).toFixed(0);
			}
		});
		$level.value = 1;

		// Para la imagen responsive
		let breakpoint = window.matchMedia('(min-width: 855px)');

		const responsive = (e) => {
			$champImg.setAttribute('alt', `${champNick}`);
			if (e.matches) {
				$champImg.setAttribute('src', `${loadingAPI}${champNick}_0.jpg`);
			} else {
				$champImg.setAttribute('src', `${squareAPI}${champNick}.png`);
			}
		};
		// Valida el cambio de MQ
		breakpoint.addEventListener('change', responsive);
		responsive(breakpoint);
	} catch (err) {
		console.log(err);
	}
}

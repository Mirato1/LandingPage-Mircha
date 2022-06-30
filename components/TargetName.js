import champs from '../helpers/champs_runes.js';
import { cambiarArbol } from './CambiarArbol.js';
import { cambiarHabilidades } from './CambiarHabilidades.js';
import { cambiarMaestrias } from './CambiarMaestrias.js';
import { cambiarNombre } from './CambiarNombre.js';
import { cambiarOrden } from './CambiarOrden.js';
import { cambiarRunas } from './CambiarRunas.js';
import { cambiarSkills } from './CambiarSkills.js';
import { cambiarSpells } from './CambiarSpells.js';
import { countersData } from './CountersData.js';
import { skins } from './Skins.js';

export function TargetName() {
	let champions = champs.champions,
		runes = champs.runes;
	document.addEventListener('click', (e) => {
		let $card = e.target.closest('.champion__card');
		if ($card) {
			let campeon = champions.find((el) => el.nombre === $card.id);
			cambiarHabilidades(campeon);
			cambiarSpells(campeon);
			cambiarArbol(campeon);
			cambiarMaestrias(campeon, runes);
			cambiarSkills(campeon);
			cambiarRunas(campeon);
			countersData(campeon);
			cambiarOrden(campeon);
			cambiarNombre(campeon);
			skins(campeon);
		}
	});
}

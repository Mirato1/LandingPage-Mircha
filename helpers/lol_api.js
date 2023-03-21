// Todas las APIS / RUTAS
const CHAMPS = 'https://ddragon.leagueoflegends.com/cdn/11.19.1/data/en_US/champion.json',
	DATACHAMP = 'https://ddragon.leagueoflegends.com/cdn/11.19.1/data/en_US/champion/',
	SQUARE = 'https://ddragon.leagueoflegends.com/cdn/11.19.1/img/champion/',
	LOADING = 'https://ddragon.leagueoflegends.com/cdn/img/champion/loading/',
	SPLASH = 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/',
	//  Pasiva Spells ETC
	PASSIVE = 'https://ddragon.leagueoflegends.com/cdn/11.19.1/img/passive/',
	SPELL = 'https://ddragon.leagueoflegends.com/cdn/11.19.1/img/spell/',
	SUMMAPI =
		'https://la2.api.riotgames.com/lol/league/v4/entries/by-summoner/ZdBOFiDYRWWGbjpmGts8rgP2ZsZl8MNRzvpujGXOHr6H',
	// KEY
	APIKEY = 'RGAPI-bd5290c6-8537-48b6-be79-1f0fbd15437e',
	TOTALAPI = `${SUMMAPI}?api_key=${APIKEY}`,
	//Runas
	RUNESKEY = 'https://ddragon.leagueoflegends.com/cdn/11.19.1/data/en_US/runesReforged.json',
	KEYSTONE = 'https://ddragon.leagueoflegends.com/cdn/img/';

export default {
	CHAMPS,
	DATACHAMP,
	SQUARE,
	LOADING,
	PASSIVE,
	SPELL,
	SPLASH,
	TOTALAPI,
	RUNESKEY,
	KEYSTONE,
};

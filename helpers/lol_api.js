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
		'https://la2.api.riotgames.com/lol/league/v4/entries/by-summoner/L7pn4nX_XQEtmyo5FTtJB5Wv83qdTJA-iSDj0ikf-zPs',
	// KEY
	APIKEY = 'RGAPI-11df4e67-c74b-4653-8959-85c3e436ac27',
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

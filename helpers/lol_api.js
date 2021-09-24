// Todas las APIS / RUTAS
const CHAMPS =
    "https://ddragon.leagueoflegends.com/cdn/11.19.1/data/en_US/champion.json",
  DATACHAMP =
    "https://ddragon.leagueoflegends.com/cdn/11.19.1/data/en_US/champion/",
  SQUARE = "https://ddragon.leagueoflegends.com/cdn/11.19.1/img/champion/",
  LOADING = "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/",
  SPLASH = "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/",
  //  Pasiva Spells ETC
  PASSIVE = "https://ddragon.leagueoflegends.com/cdn/11.19.1/img/passive/",
  SPELL = "https://ddragon.leagueoflegends.com/cdn/11.19.1/img/spell/",
  SUMMAPI =
    "https://la2.api.riotgames.com/lol/league/v4/entries/by-summoner/ZdBOFiDYRWWGbjpmGts8rgP2ZsZl8MNRzvpujGXOHr6H",
  // KEY
  APIKEY = "RGAPI-d5e69ae1-f20e-4bee-b190-862e5f81faa3",
  TOTALAPI = `${SUMMAPI}?api_key=${APIKEY}`,
  //Runas
  RUNESKEY =
    "https://ddragon.leagueoflegends.com/cdn/11.19.1/data/en_US/runesReforged.json",
  KEYSTONE = "https://ddragon.leagueoflegends.com/cdn/img/";

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

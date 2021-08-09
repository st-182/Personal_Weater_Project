// Variables
const OPEN_WEATHER_MAP = `some`;
const METEO_LT = `https://api.meteo.lt/v1/places/vilnius/forecasts/long-term`;
const GISMETEO = `https://api.chucknorris.io/jokes/random`;
const WEATHER_COM = `https://api.chucknorris.io/jokes/random`;
const ACCUWEATHER_COM = `https://api.chucknorris.io/jokes/random`;
const WEATHER_UA = `https://api.chucknorris.io/jokes/random`;
// Functions
const getData = async (EndPoint) => {
  console.log(`works`);
  await fetch(EndPoint, { mode: "no-cors" })
    .then((res) => {
      console.log(res);
      return res.json();
    })
    .then((data) => {
      console.log(data);
    });
};
// Events
document.addEventListener(`DOMContentLoaded`, () => {
  getData(METEO_LT);
  //   getData(GISMETEO);
});
// console.log(`works`);

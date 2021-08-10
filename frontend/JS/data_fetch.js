// Variables
const OPEN_WEATHER_MAP = `http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=5bec007b0740a397453617640233e952`;
const METEO_LT = `https://api.meteo.lt/v1/places/vilnius/forecasts/long-term`;
const GISMETEO = `http://services.gismeteo.ru/inform-service/bbc003ba554f0c6ebd4603139dcea58f/forecast/?city=4368https://api.chucknorris.io/jokes/random`;
const WEATHER_COM = `https://api.chucknorris.io/jokes/random`;
const ACCUWEATHER_COM = `https://api.chucknorris.io/jokes/random`;
const WEATHER_UA = `https://api.chucknorris.io/jokes/random`;
// Functions
const getData = (EndPoint) => {
  console.log(this.responseText);
};

const oReq = new XMLHttpRequest();
oReq.addEventListener("DOMContentLoaded", getData);
oReq.open("GET", "https://api.meteo.lt/v1/places/vilnius/forecasts/long-term");
oReq.send();

// const getDataFromXML = async (EndPoint) => {
//   const xml = new XMLHttpRequest();
//   xml.onreadystatechange = function () {
//     if (this.readyState == 4 && this.status == 200) {
//       // Typical action to be performed when the document is ready:
//       document.getElementById("demo").innerHTML = xml.responseText;
//     }
//   };
//   xml.open("GET", "filename", true);
//   xml.send();
// };
// Events
// document.addEventListener(`DOMContentLoaded`, () => {
//   getData(METEO_LT);
//   // getData(OPEN_WEATHER_MAP);
// });

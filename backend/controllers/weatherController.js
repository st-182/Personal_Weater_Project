//!-----Import mongoDB schemas-----
// import Model from "../models/modelsModel.js";
// import Vehicle from "../models/vehiclesModel.js";
//!-----Import data arrays-----
// importing data arrays, so code would look cleaner
import {
  dayOfTheWeek,
  dayOfTheWeekInString,
  lithuanianToEnglish,
} from "../Logic/functions.js";
//!-----Import Node.JS Modules-----
import axios from "axios";

//!-----Routes-----
//! GET
const getWeatherDataFrom_METEO_LT = (req, res) => {
  const city = lithuanianToEnglish(req.params.city);

  axios
    .get(`https://api.meteo.lt/v1/places/${city}/forecasts/long-term`)
    .then((data) => {
      const forecast = []; //this is modified forecastTimestamps, now they includes day of the week
      data.data.forecastTimestamps.forEach((hour) => {
        let d = +hour.forecastTimeUtc.slice(8, 10); //day
        let m = +hour.forecastTimeUtc.slice(5, 7); //month
        let y = +hour.forecastTimeUtc.slice(0, 4); //year
        forecast.push({
          day: dayOfTheWeekInString(Math.floor(dayOfTheWeek(d, m, y))),
          ...hour,
        });
      });

      const convenientData = {
        place: data.data.place,
        forecast: forecast,
      };

      res.json(convenientData);
    });
};
//! POST

//!-----Export-----
export { getWeatherDataFrom_METEO_LT };

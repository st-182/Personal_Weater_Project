// Variables

const EndPoint = `http://localhost:5000/`;
// location settings
const options = {
  enableHighAccuracy: true,
  timeout: 3000,
  maximumAge: 0,
};

const connectionEstablished = (res) => {
  const coordinate = res.coords;
  console.log(res);
  console.log(`Latitude: ${coordinate.latitude}`);
  console.log(`Longitude: ${coordinate.longitude}`);
  console.log(`Accuracy ${coordinate.accuracy} m.`);
};

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

navigator.geolocation.getCurrentPosition(connectionEstablished, error, options);

// Functions
const getData = () => {
  fetch(EndPoint)
    .then((res) => res.json())
    .then((data) => console.log(data));
};

document.addEventListener(`DOMContentLoaded`, () => {
  getData(EndPoint);
  // getData(OPEN_WEATHER_MAP);
});

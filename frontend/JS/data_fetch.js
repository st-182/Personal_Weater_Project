// Variables
// -Endpoint for data
const EndPoint = `http://localhost:8080/coordinates`;
// -location settings
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
  getLocationFromGEO_positionStack(EndPoint, {
    latitude: coordinate.latitude,
    longitude: coordinate.longitude,
  });
};

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

// Functions
const getLocationFromGEO_positionStack = (EndPoint, data) => {
  fetch(EndPoint, {
    method: `POST`,
    headers: {
      "Content-Type": `application/json`,
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
};

document.addEventListener(`DOMContentLoaded`, () => {
  // getLocationFromGEO_positionStack(EndPoint);
});
navigator.geolocation.getCurrentPosition(connectionEstablished, error, options);

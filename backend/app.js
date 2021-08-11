const express = require("express");
const cors = require("cors");
const fetch = require("node-fetch");

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", async (req, res) => {
  //   fetch(`https://api.meteo.lt/v1/places/klaipeda/forecasts/long-term`)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       res.send(data);
  //     });
  const response = await fetch(
    `https://api.meteo.lt/v1/places/klaipeda/forecasts/long-term`
  );
  const data = await response.json();
  res.send(data);
});

app.listen(8080, () => console.log("server running"));

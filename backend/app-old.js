const express = require("express");
const cors = require("cors");
const fetch = require("node-fetch");
const dotenv = require("dotenv");

const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();

app.get("/", async (req, res) => {
  const response = await fetch(
    `https://api.meteo.lt/v1/places/klaipeda/forecasts/long-term`
  );
  const data = await response.json();
  res.send(data);
});

//PositionStack API, will return a city out of coordinates
app.post("/coordinates", async (req, res) => {
  try {
    //   Stage 1: location detection
    const request = req.body; // receiving coordinates from frontend
    const url = `${process.env.POSITION_STACK}?access_key=${process.env.POSITION_STACK_KEY}&query=${request.latitude},${request.longitude}`; // creating EndPoint for fetch call
    const response = await fetch(url); // making fetch call to the location detection API using coordinates
    const data = await response.json();
    //   Stage 2: passing location to the weather API
    const url = `${process.env.POSITION_STACK}?access_key=${process.env.POSITION_STACK_KEY}&query=${request.latitude},${request.longitude}`; // creating EndPoint for fetch call

    res.send(data);
  } catch (err) {
    console.log(err);
  }
});
app.get("/weather");

app.listen(8080, () => console.log("server running"));

import express from "express";
import cors from "cors";
import fetch from "node-fetch";
import dotenv from "dotenv";
import { getWeatherDataFrom_METEO_LT } from "./controllers/weatherController.js";

const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();

app.get("/weather/:city", getWeatherDataFrom_METEO_LT);

app.listen(5000, () => console.log("server running"));

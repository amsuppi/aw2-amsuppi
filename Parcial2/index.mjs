import "./iniciar.env.mjs";
import express from "express";
import { configurarMiddlewares } from "./config/middlewares.mjs";
import { registrarRutas } from "./config/rutas.mjs";

const PUERTO = process.env.PUERTO || 3000;
const app = express();

configurarMiddlewares(app);
registrarRutas(app);

app.listen(PUERTO, () => {
  console.log(`Servidor en http://localhost:${PUERTO}`);
});

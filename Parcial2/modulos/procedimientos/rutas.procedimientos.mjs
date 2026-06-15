import { Router } from "express";
import { calcularResumenInventario } from "../../middleware/calcularResumenInventario.mjs";
import * as controlador from "./controladores.procedimientos.mjs";

/** Rutas de procedimientos (montadas en /procedimientos). */
const rutasProcedimientos = new Router();

rutasProcedimientos.get(
  "/resumen-inventario",
  calcularResumenInventario,
  controlador.obtenerResumen
);

export default rutasProcedimientos;

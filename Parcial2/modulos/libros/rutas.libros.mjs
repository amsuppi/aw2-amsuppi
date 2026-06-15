import { Router } from "express";
import * as controlador from "./controladores.libros.mjs";

/** Rutas REST de libros (montadas en /api/v1/libros). */
const rutasLibros = new Router();

rutasLibros.get("/", controlador.obtenerTodos);
rutasLibros.get("/:id", controlador.obtenerUno);

export default rutasLibros;

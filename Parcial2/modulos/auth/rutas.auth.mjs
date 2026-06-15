import { Router } from "express";
import * as controlador from "./controladores.auth.mjs";

/** Rutas del módulo de autenticación. */
const rutasAuth = new Router();

/* POST /autenticar — autentica usuario y crea sesión. */
rutasAuth.post("/autenticar", controlador.autenticar);

/* GET /cerrar-sesion — elimina sesionId desde el servidor. */
rutasAuth.get("/cerrar-sesion", controlador.cerrarSesion);

export default rutasAuth;

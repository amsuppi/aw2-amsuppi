import express from "express";
import rutasAuth from "../modulos/auth/rutas.auth.mjs";
import rutasLibros from "../modulos/libros/rutas.libros.mjs";
import rutasProcedimientos from "../modulos/procedimientos/rutas.procedimientos.mjs";
import {
  chequearCookieApi,
  chequearCookiePaginas,
} from "../middleware/chequearCookie.mjs";

/**
 * Registra todas las rutas de la aplicación.
 * Separa la configuración de rutas del punto de entrada (index.mjs).
 */
export function registrarRutas(app) {
  app.use("/", rutasAuth);

  app.use("/css", express.static("./fronts/css"));

  app.use("/items", chequearCookiePaginas, express.static("./fronts/items"));
  app.use("/item", chequearCookiePaginas, express.static("./fronts/item"));
  app.use(
    "/procedimiento",
    chequearCookiePaginas,
    express.static("./fronts/procedimiento")
  );

  app.use("/login", express.static("./fronts/login"));

  app.use("/api/v1/libros", chequearCookieApi, rutasLibros);
  app.use("/procedimientos", chequearCookieApi, rutasProcedimientos);

  app.get("/", redirigirAlLogin);
}

function redirigirAlLogin(req, res) {
  res.redirect("/login");
}

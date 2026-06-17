import express from "express";
import rutasAuth from "../modulos/auth/rutas.auth.mjs";
import rutasLibros from "../modulos/libros/rutas.libros.mjs";
import rutasProcedimientos from "../modulos/procedimientos/rutas.procedimientos.mjs";
import {
  chequearCookieApi,
  chequearCookiePaginas,
} from "../middleware/chequearCookie.mjs";

export function registrarRutas(app) {
  app.use("/", rutasAuth);

  app.use("/css", express.static("./fronts/css"));

  /* Rutas de items */
  app.use("/items", chequearCookiePaginas, express.static("./fronts/items"));
  app.use("/item", chequearCookiePaginas, express.static("./fronts/item"));

  /* Rutas de procedimiento */
  app.use(
    "/procedimiento",
    chequearCookiePaginas,
    express.static("./fronts/procedimiento")
  );

  /* Rutas de login */
  app.use("/login", express.static("./fronts/login"));

  /* Rutas de libros */
  app.use("/api/v1/libros", chequearCookieApi, rutasLibros);

  /* Rutas de procedimientos */
  app.use("/procedimientos", chequearCookieApi, rutasProcedimientos);

  /* Redirigir a login */
  app.get("/", redirigirAlLogin);
}

function redirigirAlLogin(req, res) {
  res.redirect("/login");
}

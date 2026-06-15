import express from "express";
import cookieParser from "cookie-parser";

/**
 * Registra los middlewares globales de Express.
 * Se ejecutan en cada petición antes de llegar a las rutas.
 */
export function configurarMiddlewares(app) {
  /*
   * express.json(): parsea el body cuando el cliente envía JSON
   * (Content-Type: application/json). Deja los datos en req.body.
   * Se usa en endpoints de API que reciben objetos JSON por POST/PUT.
   */
  app.use(express.json());

  /*
   * express.urlencoded(): parsea formularios HTML enviados por POST
   * (Content-Type: application/x-www-form-urlencoded).
   * El login envía usuario y pass desde un <form method="post">.
   */
  app.use(express.urlencoded({ extended: true }));

  /*
   * cookie-parser: lee cookies del navegador y permite firmarlas.
   * req.signedCookies contiene las cookies verificadas con FIRMA_COOKIE.
   */
  app.use(cookieParser(process.env.FIRMA_COOKIE));
}

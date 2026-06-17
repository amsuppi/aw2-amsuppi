import express from "express";
import cookieParser from "cookie-parser";


export function configurarMiddlewares(app) {

  app.use(express.json());

  app.use(express.urlencoded({ extended: true }));

  app.use(cookieParser(process.env.FIRMA_COOKIE));
}

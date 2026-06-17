import { DURACION_SESION_MS } from "./token.mjs";

/**
 * Opciones compartidas entre res.cookie() y res.clearCookie().
 *
 * Express advierte que el navegador solo borra la cookie si las opciones
 * de clearCookie son idénticas a las usadas al crearla.
 * @see https://expressjs.com/en/api.html#res.clearCookie
 */
export const OPCIONES_SESION = {
  path: "/",
  signed: true,
  sameSite: "lax",
  httpOnly: true,
  secure: true,
};

/**
 * Expiración de la cookie sesionId:
 * - Sin maxAge: cookie de sesión; el acceso caduca cuando chequearCookie
 *   rechaza el JWT expirado (1h en token.mjs).
 * - Con maxAge explícito (1h): el navegador también la elimina tras 1h,
 *   alineado con la vida útil del JWT.
 */
export function establecerSesion(res, valor) {
  res.cookie("sesionId", valor, {
    ...OPCIONES_SESION,
    maxAge: DURACION_SESION_MS,
  });
}

/**
 * Elimina sesionId desde el servidor.
 * Usa las mismas opciones base que establecerSesion (sin expires ni maxAge).
 */
export function eliminarSesion(res) {
  res.clearCookie("sesionId", OPCIONES_SESION);
}

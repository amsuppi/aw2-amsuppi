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

/** Guarda el JWT en la cookie firmada sesionId. */
export function establecerSesion(res, valor) {
  res.cookie("sesionId", valor, OPCIONES_SESION);
}

/**
 * Elimina sesionId desde el servidor.
 * Usa las mismas opciones que establecerSesion (sin expires ni maxAge).
 */
export function eliminarSesion(res) {
  res.clearCookie("sesionId", OPCIONES_SESION);
}

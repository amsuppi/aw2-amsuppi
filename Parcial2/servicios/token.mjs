import jwt from "jsonwebtoken";

/** Duración del JWT y de la cookie sesionId (deben coincidir). */
export const DURACION_SESION = "1h";
export const DURACION_SESION_MS = 1000 * 60 * 60;

/** Genera un token firmado con los datos del usuario autenticado. */
export function generarToken(datosUtiles) {
  return new Promise((resolve, reject) => {
    jwt.sign(
      datosUtiles,
      process.env.FIRMA_JWT,
      { expiresIn: DURACION_SESION },
      (err, token) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(token);
      }
    );
  });
}

/** Verifica un token y devuelve el payload decodificado. */
export function verificarToken(token) {
  return new Promise((resolve, reject) => {
    jwt.verify(token, process.env.FIRMA_JWT, (err, payload) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(payload);
    });
  });
}

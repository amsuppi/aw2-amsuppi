import jwt from "jsonwebtoken";

/** Genera un token firmado con los datos del usuario autenticado. */
export function generarToken(datosUtiles) {
  return new Promise((resolve, reject) => {
    jwt.sign(
      datosUtiles,
      process.env.FIRMA_JWT,
      { expiresIn: "1h" },
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

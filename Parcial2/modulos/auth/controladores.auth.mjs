import bcrypt from "bcryptjs";
import * as modelo from "./modelo.auth.mjs";
import { generarToken } from "../../servicios/token.mjs";
import { establecerSesion, eliminarSesion } from "../../servicios/cookies.mjs";

/**
 * POST /autenticar
 * Verifica credenciales en BD y, si son válidas, guarda el JWT en sesionId.
 */
export async function autenticar(req, res) {
  const { usuario, pass } = req.body;

  if (!usuario || !pass) {
    return res.status(400).send("Usuario y contraseña requeridos");
  }

  try {
    /* Buscar usuario por nombre de usuario */
    const registro = await modelo.buscarUsuarioPorUsername(usuario);

    /* Si no existe el usuario o la contraseña es incorrecta, redirige a login */
    if (!registro || !bcrypt.compareSync(pass, registro.password_hash)) {
      return res.redirect("/login?error=1");
    }

    const datosUtiles = {
      usuario: registro.username,
      id: registro.id,
    };

    /* Generar token */
    const token = await generarToken(datosUtiles);

    /* Establecer sesión */
    establecerSesion(res, token);

    /* Redirigir a items */
    return res.redirect("/items");
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
}

/** GET /cerrar-sesion — elimina sesionId desde el servidor. */
export function cerrarSesion(req, res) {
  eliminarSesion(res);
  res.redirect("/login");
}

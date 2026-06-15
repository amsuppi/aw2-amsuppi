import { verificarToken } from "../servicios/token.mjs";

/**
 * Middleware de sesión (patrón visto en clase).
 * Lee req.signedCookies['sesionId'] y valida el JWT almacenado.
 */

async function chequearCookie(req, res, next, esApi) {
  const sesionId = req.signedCookies["sesionId"];

  if (!sesionId) {
    if (esApi) {
      return res.status(401).json({ error: "No autorizado" });
    }
    return res.redirect("/login");
  }

  try {
    req.usuario = await verificarToken(sesionId);
    next();
  } catch {
    if (esApi) {
      return res.status(401).json({ error: "Token inválido o expirado" });
    }
    return res.redirect("/login");
  }
}

/** Protege endpoints de API. */
export function chequearCookieApi(req, res, next) {
  chequearCookie(req, res, next, true);
}

/** Protege páginas HTML. */
export function chequearCookiePaginas(req, res, next) {
  chequearCookie(req, res, next, false);
}

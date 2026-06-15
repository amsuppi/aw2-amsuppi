import pool from "../../conexion.bd.mjs";

/** Busca un usuario por nombre de usuario. */
export async function buscarUsuarioPorUsername(username) {
  const resultado = await pool.query(
    "SELECT id, username, password_hash FROM usuarios WHERE username = $1",
    [username]
  );

  return resultado.rows[0] ?? null;
}

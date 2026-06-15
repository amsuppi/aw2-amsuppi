import { Pool } from "pg";

/**
 * Pool de conexiones a PostgreSQL.
 * Reutiliza conexiones entre consultas (login, futuras operaciones con BD).
 */
const pool = new Pool({
  host: process.env.BD_HOST,
  user: process.env.BD_USER,
  password: process.env.BD_PASS,
  database: process.env.BD_BD,
  port: process.env.BD_PORT,
});

export default pool;

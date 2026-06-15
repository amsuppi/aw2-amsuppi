/**
 * Controlador de libros.
 * Recibe la petición HTTP, delega al modelo y responde en JSON.
 */
import * as modelo from "./modelo.libros.mjs";

/** GET /api/v1/libros — devuelve el catálogo completo. */
export function obtenerTodos(req, res) {
  try {
    const libros = modelo.obtenerTodos();
    res.json(libros);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener los libros" });
  }
}

/** GET /api/v1/libros/:id — devuelve un libro por su identificador. */
export function obtenerUno(req, res) {
  try {
    const id = parseInt(req.params.id, 10);
    const libro = modelo.obtenerPorId(id);

    if (!libro) {
      return res.status(404).json({ error: "No encontrado" });
    }

    res.json(libro);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener el libro" });
  }
}

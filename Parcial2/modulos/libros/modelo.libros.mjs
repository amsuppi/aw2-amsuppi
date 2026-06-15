
import libros from "../../libros.mjs";

/* Obtener todos los libros */
export function obtenerTodos() {
  return libros;
}

/* Obtener libro por id */
export function obtenerPorId(id) {
  return libros.find((libro) => libro.id === id) ?? null;
}

import libros from "../libros.mjs";

export function resolverLibroPorId(req, res, next) {
  const id = parseInt(req.params.id, 10);
  const resultadoLibro = libros.find((libro) => libro.id === id);

  if (!resultadoLibro) {
    res.status(404).json({ error: "No encontrado" });
    return;
  }

  req.libro = resultadoLibro;
  next();
}

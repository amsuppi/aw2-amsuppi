import libros from "../libros.mjs";

export function calcularResumenInventario(req, res, next) {
  const cantidadLibros = libros.length;

  if (cantidadLibros === 0) {
    req.resumenInventario = {
      totalLibros: 0,
      promedioPaginas: 0,
      promedioPrecio: 0,
    };
    next();
    return;
  }

  const totalPaginas = libros.reduce((acc, libro) => acc + libro.paginas, 0);
  const totalPrecio = libros.reduce((acc, libro) => acc + libro.precio, 0);

  req.resumenInventario = {
    totalLibros: cantidadLibros,
    promedioPaginas: Math.round((totalPaginas / cantidadLibros) * 100) / 100,
    promedioPrecio: Math.round((totalPrecio / cantidadLibros) * 100) / 100,
  };

  next();
}

import libros from "../libros.mjs";


/* Calcular resumen de inventario */
export function calcularResumenInventario(req, res, next) {
  const cantidadLibros = libros.length;


  /* Si no hay libros, setea el inventario en 0 */
  if (cantidadLibros === 0) {
    req.resumenInventario = {
      totalLibros: 0,
      promedioPaginas: 0,
      promedioPrecio: 0,
    };
    next();
    return;
  }

  /* Calcular total de paginas y total de precio */

  const totalPaginas = libros.reduce((acc, libro) => acc + libro.paginas, 0);
  const totalPrecio = libros.reduce((acc, libro) => acc + libro.precio, 0);


  /* Calcular promedio de paginas y promedio de precio */
  req.resumenInventario = {
    totalLibros: cantidadLibros,
    promedioPaginas: Math.round((totalPaginas / cantidadLibros) * 100) / 100,
    promedioPrecio: Math.round((totalPrecio / cantidadLibros) * 100) / 100,
  };

  next();
}

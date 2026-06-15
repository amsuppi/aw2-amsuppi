export function obtenerResumen(req, res) {
  /* Obtener resumen de inventario */
  try {
    res.json({
      exito: true,
      mensaje: "Procedimiento ejecutado correctamente",
      datos: req.resumenInventario,
    });
  } catch (error) {
    res.status(500).json({
      exito: false,
      mensaje: "Error al ejecutar el procedimiento",
    });
  }
}

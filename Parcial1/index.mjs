import express from "express";
import libros from "./libros.mjs";
import { calcularResumenInventario } from "./middleware/calcularResumenInventario.mjs";
import { resolverLibroPorId } from "./middleware/resolverLibroPorId.mjs";

const app = express();
const PORT = process.env.PORT ?? 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "API Biblioteca" });
});

app.get("/api/v1/libros", (req, res) => {
  res.json(libros);
});

app.get("/api/v1/libros/:id", resolverLibroPorId, (req, res) => {
  res.json(req.libro);
});

app.get("/procedimientos/resumen-inventario", calcularResumenInventario, (req, res) => {
  res.json(req.resumenInventario);
});

app.listen(PORT, () => {
  console.log(`Servidor en http://localhost:${PORT}`);
});

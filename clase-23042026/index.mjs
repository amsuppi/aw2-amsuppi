import express from "express";

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    res.setHeader("Content-Type", "text/html");
    res.status(200);
    res.end("<h1>Hola express</h1>");
});

app.get("/saludo", (req, res) => {
 
    res.end("<h1>Holis</h1>");
});

app.post("/", (req, res) => {
    res.end("<h1>Hola expressssss</h1>");
});
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
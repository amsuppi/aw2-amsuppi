import http from "node:http";
import { promises as fsp } from "node:fs";
import path from "node:path";

const server = http.createServer(async (req, res) => {
    try {
        if (req.method === "GET") {
            if (req.url === "/usuarios/filtrados") {
                const ruta = path.resolve("usuarios.json");
                try {
                    const contenido = await fsp.readFile(ruta, { encoding: "utf8" });
                    const usuarios = JSON.parse(contenido);
                    const filtrados = usuarios.filter((u) => typeof u.id === "number" && u.id < 10);
                    res.statusCode = 200;
                    res.setHeader("Content-Type", "application/json; charset=utf-8");
                    return res.end(JSON.stringify(filtrados, null, 2));
                } catch (err) {
                    if (err.code === "ENOENT") {
                        res.statusCode = 400;
                        res.setHeader("Content-Type", "text/plain; charset=utf-8");
                        return res.end("El archivo usuarios.json no existe. Ejecute primero la ruta /usuarios");
                    }
                    throw err;
                }
            }

            if (req.url === "/usuarios") {
                const apiUrl = "https://api.escuelajs.co/api/v1/users";
                const response = await fetch(apiUrl);
                if (!response.ok) {
                    res.statusCode = 502;
                    res.setHeader("Content-Type", "text/plain; charset=utf-8");
                    return res.end("Error al obtener datos de la API externa");
                }

                const data = await response.json();
                const ruta = path.resolve("usuarios.json");
                await fsp.writeFile(ruta, JSON.stringify(data, null, 2), "utf8");

                const contenido = await fsp.readFile(ruta, { encoding: "utf8" });
                res.statusCode = 200;
                res.setHeader("Content-Type", "application/json; charset=utf-8");
                return res.end(contenido);
            }

        }

        res.statusCode = 404;
        res.setHeader("Content-Type", "text/plain; charset=utf-8");
        return res.end("Recurso no encontrado");
    } catch (err) {
        res.statusCode = 500;
        res.setHeader("Content-Type", "text/plain; charset=utf-8");
        return res.end("Error interno");
    }
});

server.listen(3000, () => {
    console.log("Servidor corriendo en http://localhost:3000");
});
// Actividad 2 
// Leer fecth data

import fsp from "node:fs/promises"
import path from "node:path"

try {
    const response = await fetch("https://api.escuelajs.co/api/v1/users")
    const data = await response.json()

    const usuariosModificados = data.map((usuario) => {
        const usuarioModificado = {
            id: usuario.id,
            email: usuario.email,
            name: usuario.name
        }
            
        return usuarioModificado 
    });
    
    const ruta = path.resolve("usuarios.json");
    await fsp.writeFile(ruta, JSON.stringify(usuariosModificados, null, 4));

    fsp.readFile(ruta, "utf-8").then((contenido) => {
        const usuarios = JSON.parse(contenido);
        console.log(usuarios);
    }).catch((error) => {
        console.error("Error al leer el archivo:", error);
    });
} catch (error) {
    console.error("Error al obtener o guardar los datos:", error);
}
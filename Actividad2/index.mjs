// Actividad 2 
// Leer fecth data

import fsp from "node:fs/promises"
import path from "node:path"

try {
    // Pedimos usuarios a una API publica.
    const response = await fetch("https://api.escuelajs.co/api/v1/users")
    const data = await response.json()

    // Nos quedamos solo con los campos que nos interesan.
    const usuariosModificados = data.map((usuario) => {
        const usuarioModificado = {
            id: usuario.id,
            email: usuario.email,
            name: usuario.name
        }
            
        return usuarioModificado 
    });
    
    // Creamos la ruta absoluta del archivo de salida.
    const ruta = path.resolve("usuarios.json");
    // Guardamos los usuarios en formato JSON legible.
    await fsp.writeFile(ruta, JSON.stringify(usuariosModificados, null, 4));

    // Leemos el archivo recien creado y lo mostramos en consola.
    fsp.readFile(ruta, "utf-8").then((contenido) => {
        const usuarios = JSON.parse(contenido);
        console.log(usuarios);
    }).catch((error) => {
        console.error("Error al leer el archivo:", error);
    });
} catch (error) {
    // Captura errores de la API o de escritura en disco.
    console.error("Error al obtener o guardar los datos:", error);
}
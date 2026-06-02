//supobase
//bajar el programa de postgress
// docker desktop
import pool from "../../conexion.bd.mjs";

export async function obtenerProductos(){
    /* Haria una consulta a una BD */
    const productos = await pool.query("SELECT * FROM productos");
    console.log(productos.rows);
    return productos.rows;
}

export async function crearProducto(producto, precio) {
    const resultado = await pool.query(
        "INSERT INTO productos (producto, precio) VALUES ($1, $2) RETURNING *",
        [producto, precio]
    );
    return resultado.rows[0];
}
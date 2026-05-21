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
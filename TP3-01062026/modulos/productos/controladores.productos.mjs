import * as modelo from './modelo.productos.mjs'
import * as vista from './vista.productos.mjs'

export async function obtenerTodos(req, res) {
    const datosProductos = await modelo.obtenerProductos()
    // const respuestaVista = vista.obtenerTodos(datosProductos)
    res.json(datosProductos)
}
export function obtenerUno(req, res) {
    // id_producto -> nomenclatura "snake case"
    // idProducto -> nomenclatura "camel case"
    const idProducto = Number(req.params.id)
    const datosProductos = modelo.obtenerUno (idProducto) //<-- arreglo
    // si hay o no productos y responder en consecuencia
    if (datosProductos.datos.length > 0) {
        // Tener un criterio de datos a enviar
        res.json(datosProductos)
    } else {
        res.status(404).json({ mensaje: 'Producto con id ${ idProducto } no encontrado"'})
    }
}

export async function crearProducto(req, res) {
    const { producto, precio } = req.body

    if (!producto || precio == null) {
        return res.status(400).json({ mensaje: 'producto y precio son requeridos' })
    }

    const productoCreado = await modelo.crearProducto(producto, precio)
    res.status(201).json(productoCreado)
}
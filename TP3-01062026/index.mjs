import express from 'express'
import rutasproductos from './modulos/productos/rutas.productos.mjs'
import './inyectar.env.mjs'

const PUERTO = process.env.PUERTO || 3000
const app = express()

app.use(express.json())
app.use('/', rutasproductos)

app.listen(PUERTO)
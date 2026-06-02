//import express from 'express'
import { Router } from "express"
import * as controlador from './controladores.productos.mjs'

const rutasproductos = new Router()

rutasproductos.get('/api/v1/productos', controlador.obtenerTodos)
rutasproductos.get('/api/v1/productos/:id',controlador.obtenerUno)
rutasproductos.post('/api/v1/productos', controlador.crearProducto)

export default rutasproductos
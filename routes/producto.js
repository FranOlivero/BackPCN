//importaciones
//imp - Sistema
const { Router } = require('express');

//imp - Propias
const { 
    consultarProducto,
    crearProducto,
    modificarProducto,
    eliminarProducto,
    consultarProductoID } = require('../controller/producto');

//varibales
const router = Router();

//rutas
//------------------>  Opciones de Producto
router.get('/consultarProducto',consultarProducto);
router.post('/consultarProductoID',consultarProductoID);
router.post('/crearProducto',crearProducto);
router.get('/modificarProducto',modificarProducto);
router.get('/eliminarProducto',eliminarProducto);

//------------------>  Opciones de Producto



//exportaciones 
module.exports = router
//importaciones
//imp - Sistema
const { Router } = require('express');
//imp - Propias
const { 
    crearUsaurio, 
    modificarUsuario, 
    eliminarUsuario, 
    consultarUsuario } = require('../controller/admin');



//varibales
const router = Router();

//rutas
//------------------>  Opciones de Usuario
router.get( '/consultarUsuario', consultarUsuario);
router.post( '/crearUsaurio', crearUsaurio);
router.get( '/modificarUsuario', modificarUsuario);
router.get( '/eliminarUsuario', eliminarUsuario);

//------------------>  Opciones de Producto



//exportaciones 
module.exports = router
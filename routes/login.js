//importaciones
const { Router } = require('express');

//varibales
const router = Router();


//peticiones
router.get( '/', (req, res) => {

    return res.json({
        ok: true,
        msg: 'Iniciando sesion'
    })
})




//exportaciones 
module.exports = router
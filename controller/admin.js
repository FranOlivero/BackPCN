//importaciones
const { response } = require('express')
const { connection }  = require('../service/mysql');



//------------------>  Opciones de Usuario

const consultarUsuario = (req, res = response) => {
    const sql = 'select * from PRODUCTO_INVENTARIO;';
    connection.query( sql, (error, results) => {
        if( error ) throw error;
        if( results.length > 0 ){
            res.json( results );
        }else{
            res.send( 'NO HAY DATOS' )
        }
    });

}

const crearUsaurio = (req, res = response) => {
    console.log(req.body);
    const sql = "call crearUsuario(1,'8-888-1111','Pdro','','Almira','','Cliente','123456',@resp); select @resp as RP; select * from USUARIO;";
    connection.query( sql, (error, results) => {
        if( error ) throw error;
        if( results.length > 0 ){
            res.json( results );
            console.log(results);
        }else{
            res.send( 'NO HAY DATOS' )
        }
    })


}


const modificarUsuario = (req, res) => {

    return res.json({
        ok: true,
        msg: 'Modificar Usuario'
    })

}

const eliminarUsuario = (req, res) => {

    return res.json({
        ok: true,
        msg: 'Eliminar Usuario'
    })

}

//------------------>  Opciones de Productos




//exportaciones 
module.exports ={
    consultarUsuario,
    crearUsaurio,
    modificarUsuario,
    eliminarUsuario
}
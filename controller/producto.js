//importaciones
const { response } = require('express')
const { connection }  = require('../service/mysql');



//------------------>  Opciones de Producto
const consultarProducto = (req, res) => {
    const sql = 'select * from viewProductoInventario;';
    connection.query( sql, (error, results) => {
        if( error ) throw error;
        if( results.length > 0 ){
            res.json( results );
        }else{
            res.send( 'NO HAY DATOS' )
        }
    });

}

const consultarProductoID = (req, res) => {
    const { id } = req.body;
    const sql = `select * from viewProductoInventario where producto = '${id}';`;
    connection.query( sql, (error, results) => {
        if( error ) throw error;
        if( results.length > 0 ){
            res.json( results );
        }else{
            res.send( 'NO HAY DATOS' )
        }
    });
}


const crearProducto = (req, res) => {
    const { idProducto,idUsProductor,precio,cantidad,imagen } = req.body;
    const sql = `call crearProductoInv(${idProducto},${idUsProductor},${precio},${cantidad},'${imagen}',@resp); select @resp;`;
    connection.query( sql, (error, results) => {
        if( error ) throw error;
        if( results.length > 0 ){
            res.json( results );
        }else{
            res.send( 'NO HAY DATOS' )
        }
    });
}

const modificarProducto = (req, res) => {
    return res.json({
        ok: true,
        msg: 'Modificar Producto'
    })
}

const eliminarProducto = (req, res) => {
    return res.json({
        ok: true,
        msg: 'Eliminar Producto'
    })
}


//exportaciones 
module.exports ={
    consultarProducto,
    consultarProductoID,
    crearProducto,
    modificarProducto,
    eliminarProducto
}
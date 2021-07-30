//importaciones
const { app, express } = require('./service/express');
const  cors = require('cors');


//validaciones + mejoras
app.use( cors() );
app.use( express.json({limit: '50mb'}) );
// console.log( process.env );

//rutas
//----------------------------------------------------->  LOGIN
app.use( '/pcn/login', require('./routes/login') );
//----------------------------------------------------->   USR ADMIN
app.use( '/pcn/admin', require('./routes/admin') );
//----------------------------------------------------->   USR CLIENTE

//----------------------------------------------------->   USR PRODUCTOR
app.use( '/pcn/producto', require('./routes/producto') );
//----------------------------------------------------->   CMD PRODUCTO 









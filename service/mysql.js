//importaciones
const mysql = require('mysql');
require('dotenv').config();

//variables
const connection = mysql.createConnection({
  host     : process.env.HOST,
  port     : process.env.PORTDB, 
  user     : process.env.USER,
  password : process.env.PASSWORD,
  database : process.env.DATABASE,
  multipleStatements: true
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!!... DB");
})


//exportaciones 
module.exports = { connection };





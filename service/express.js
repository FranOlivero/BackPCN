//importaciones
const express = require('express');
require('dotenv').config();

//variables
const app = express();
app.listen( process.env.PORT , () => {
    console.log(`localhost:${process.env.PORT}`);
})


//exportaciones
module.exports = { app, express};

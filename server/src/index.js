const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

//Settings
app.set('port',4000)

//Midlewares
app.use(express.json());

//Routes
app.use(require('./routes/datos'));

//Iniciando servidor
app.listen(app.get('port'),()=>{
    console.log('Server on port', app.get('port'));
});


const mysql = require('mysql');

var conexion = mysql.createConnection({
    host: 'localhost',
    user: 'user',
    password: 'pass',
    database: 'prueba'
     
}); 
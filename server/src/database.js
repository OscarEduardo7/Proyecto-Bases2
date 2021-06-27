const mysql = require('mysql');

const conexion = mysql.createConnection({
    host: '34.134.102.107',
    user: 'basesproyecto',
    password: 'basesproyecto',
    database: 'proyecto'
});

conexion.connect(function (err){
    if (err){
        console.log(err);
        return;
    }else{
        console.log('Base de datos conectada.')
    }
});

module.exports = conexion;
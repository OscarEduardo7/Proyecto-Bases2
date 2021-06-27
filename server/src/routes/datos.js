const express = require('express');
const router = express.Router();

const sqlConexion = require('../database');

//sesion
router.post('/login',(req,res) => {
    let body = req.body;
    var user = body.username;
    var pass = body.password;
    
    if(user == 'Admin' && pass == '12345'){
        res.json('correcto');
    }else{
        res.json('incorrecto');
    }
});

router.get('/', (req,res) =>{
    sqlConexion.query('select * from ranking;', (err, rows, fields) =>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
            res.json('error');
        }
    });
});

module.exports = router;
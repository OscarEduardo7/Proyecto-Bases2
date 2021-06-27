import React, {useState} from 'react'
import Grid from '@material-ui/core/Grid'
import { Button, Link, Paper, TextField, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import Swal from 'sweetalert2';
import Cookies from 'universal-cookie';

const url = "http://localhost:4000/login";
const cookiess = new Cookies();

const useStyles = makeStyles((theme) => ({
    paperStyle: {
      padding: 20,
      height: '70vh',
      width: 280,
      margin: "20px auto"
    },
    btn:{
        margin: '15px 0',
        backgroundColor: '#3b5998',
        color: 'white'
    }
  }));

const Login = () =>{


  const classes = useStyles();

  const [datos, setDatos] = useState({
    username: '',
    pass: '',
  })

  const handleInputChange = (event) =>{
    //los tres puntos realiza una especie de copia del estado
    setDatos({
      ...datos,
      [event.target.name]: event.target.value 
    })
  }

  const enviarDatos = (event) =>{
    console.log(datos)
    login();
  }

  const login = async()=>{
    axios.post(url,{username: datos.username, password: datos.pass})
    .then(response=>{
      console.log(response.data);
      if(response.data === "incorrecto"){
        Swal.fire({
          icon: 'error',
          title: 'Credenciales incorrectas.',
          showConfirmButton: false,
          timer: 2000
        })
      }else if(response.data === "correcto"){
        Swal.fire({
          icon: 'success',
          title: 'Se inicio sesion correctamente.',
          showConfirmButton: false,
          timer: 2000
        })
        cookiess.set('name', datos.username, {path: "/"});
        cookiess.set('pass', datos.pass, {path: "/"});
        setTimeout("location.href='./inicio'", 2000);
      }
    })
    .catch(error=>{
      console.log(error);
      Swal.fire({
        icon: 'error',
        title: 'Ocurrio un error.',
        showConfirmButton: false,
        timer: 1500
      })
    })
  }

  return(
      <Grid>
        <Paper elevation={10} className={classes.paperStyle}>
              <Grid align="center">
                  <h2>Iniciar Sesion</h2>
              </Grid>

              <TextField onChange={handleInputChange} name="username" placeholder="Ingresa tu usuario." label="Usuario" fullWidth required></TextField>
              <TextField onChange={handleInputChange} name="pass"placeholder="Ingresa tu contraseña." label="Contraseña"  type="password" fullWidth required></TextField>
              <Button onClick={enviarDatos} className={classes.btn} type="submit"  variant="contained" fullWidth>Iniciar</Button>
              <Grid align="center">
              <Typography> ¿No tienes una cuenta? </Typography>
              <Link href="./#">
                    Crea una ahora
              </Link>
              </Grid>
        </Paper>
      </Grid>
  )
}

export default Login
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import NavBar2 from '../components/navbar2';
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import { Line } from 'react-chartjs-2'
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '900px',
    height: '300px'
  },
  cargar: {
    backgroundColor: '#3b5998',
    color: 'white'
  },  
  divisor:{
    paddingBottom: '20px',
  }
}));


const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    }
  }
};

function Grafica2() {

  const [datos, setDatos] = useState([]);

  useEffect(()=>{
      //peticion a la api
      const url = "http://localhost:4000/";
                  
      axios.get(url)
      .then(response=>{
          //console.log(response.data)
          //setDatos(response.data);

          var nuevos = [];
          let arrayD = response.data
          var randomColor = require('randomcolor');
          

          for(let i = 0; i < arrayD.length; i++){
            var color = randomColor();
            let d = {
             'label': response.data[i].nombre,
             'data': [response.data[i].Mayo2020,response.data[i].Junio2020,response.data[i].Julio2020,response.data[i].Agosto2020,response.data[i].Septiembre2020,response.data[i].Octubre2020,response.data[i].Noviembre2020,response.data[i].Diciembre2020,response.data[i].Enero2021,response.data[i].Febrero2021,response.data[i].Marzo2021,response.data[i].Abril2021],
             'fill': 'false',
             'backgroundColor': '#ffffff',
             'borderColor': color
            }

            nuevos.push(d);
          }
          
          setDatos(nuevos)
          console.log(datos)
          
      })
      .catch(error=>{
          console.log(error)
      })
    },[]);

  const classes = useStyles();

  return (
    <div>
      <NavBar2></NavBar2>
      <Container maxWidth="lg">
      <div className={classes.divisor}/>
        <Typography variant="h4" align="center" color="initial">RANKING BANCARIO</Typography>
        <div className={classes.divisor}/>
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <Typography variant="h5" align="left" color="initial">Grafica Ranking Bancario</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6" color="initial" align="right">
              <Button variant="contained" className={classes.cargar}>
              Cargar Archivos
              </Button>
            </Typography>

          </Grid>
        </Grid>
        <div className={classes.divisor}/>
        <Container className={classes.root}>
          <Line
              data={{
                labels: ['Mayo', 'Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre', 'Enero', 'Febrero', 'Marzo', 'Abril'],
                datasets: datos,
              }}
              options={options}
          />
        </Container>
      </Container>
    </div>
  )
}

export default Grafica2
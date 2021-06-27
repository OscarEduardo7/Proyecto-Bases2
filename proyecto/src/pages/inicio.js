import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import NavBar2 from '../components/navbar2';
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell} from '@material-ui/core';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '1300px',
    height: '300px'
  },
  cargar: {
    backgroundColor: '#3b5998',
    color: 'white'
  },
  cabecera:{
    backgroundColor: '#bfc4dc',
  },
  cabecera20:{
    backgroundColor: '#961126',
  },
  cabecera21:{
    backgroundColor: '#8db670',
  },
  cab:{
    backgroundColor: 'white',
    color: 'white'
  },
  divisor:{
    paddingBottom: '20px',
  }
}));

function Inicio() {


  const [datos, setDatos] = useState([]);

  useEffect(()=>{
      //peticion a la api
      const url = "http://localhost:4000/";
                  
      axios.get(url)
      .then(response=>{
          console.log(response.data)
          setDatos(response.data);
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
            <Typography variant="h5" align="left" color="initial">Tabla Ranking Bancario</Typography>
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
          <TableContainer size="small">
            <Table size="small">
            <TableHead className={classes.cabecera}>
              <TableRow className={classes.cabecera21}>
                <TableCell className={classes.cab}>AÑO</TableCell>
                <TableCell className={classes.cabecera20} colSpan={8}> 2020 </TableCell>
                <TableCell className={classes.cabecera21} colSpan={4}> 2021 </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>PERFIL FINANCIERO</TableCell>
                <TableCell>MAY.</TableCell>
                <TableCell>JUN.</TableCell>
                <TableCell>JUL.</TableCell>
                <TableCell>AGOS.</TableCell>
                <TableCell>SEPT.</TableCell>
                <TableCell>OCT.</TableCell>
                <TableCell>NOV.</TableCell>
                <TableCell>DIC.</TableCell>
                <TableCell>ENE.</TableCell>
                <TableCell>FEB.</TableCell>
                <TableCell>MAR.</TableCell>
                <TableCell>ABR.</TableCell>
              </TableRow>
            </TableHead>
              {
                datos.map(celda=>(
                  <TableRow>
                    <TableCell>{celda.nombre}</TableCell>
                    <TableCell>{celda.Mayo2020}</TableCell>
                    <TableCell>{celda.Junio2020}</TableCell>
                    <TableCell>{celda.Julio2020}</TableCell>
                    <TableCell>{celda.Agosto2020}</TableCell>
                    <TableCell>{celda.Septiembre2020}</TableCell>
                    <TableCell>{celda.Octubre2020}</TableCell>
                    <TableCell>{celda.Noviembre2020}</TableCell>
                    <TableCell>{celda.Diciembre2020}</TableCell>
                    <TableCell>{celda.Enero2021}</TableCell>
                    <TableCell>{celda.Febrero2021}</TableCell>
                    <TableCell>{celda.Marzo2021}</TableCell>
                    <TableCell>{celda.Abril2021}</TableCell>
                  </TableRow>
                ))
              }
            <TableBody>
            </TableBody>
            </Table>
          </TableContainer>
        </Container>
      </Container>
    </div>
  )
}

export default Inicio
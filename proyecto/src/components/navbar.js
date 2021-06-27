/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(10),
  },
  title: {
    flexGrow: 1,
    color: 'white',
    fontWeight: 'bold'
  },
  menu:{
    background: '#232e4a'
  },
  boton:{
    color: 'white',
    fontSize: '16px'
  }
}));

function NavBar() {

  const classes = useStyles();

  return (
    <div>
      <AppBar position="static" className={classes.menu}>
        <Toolbar>
          <Typography variant="h5" className={classes.title}>
            Proyecto - Bases 2
          </Typography>
        </Toolbar>
      </AppBar> 
    </div>
  )
}

export default NavBar
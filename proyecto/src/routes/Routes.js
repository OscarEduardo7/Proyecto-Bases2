import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import App from '../App';
import Grafica2 from '../pages/grafica2';
import inicio from '../pages/inicio';
//importamos nuestras pagias

function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={App}/>
                <Route exact path="/inicio" component={inicio}/>
                <Route exact path="/grafica2" component={Grafica2}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;
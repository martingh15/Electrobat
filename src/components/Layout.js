import React, {Component} from 'react';
import {Route} from 'react-router-dom';

//Router
import {Switch} from 'react-router';

//CSS
import "../assets/css/Layout.css";

//Componentes
import Nosotros from "./Nosotros";
import Productos from "./Productos";
import Servicios from "./Servicios";
import Contacto from "./Contacto";
import NotFound from "./NotFound";

class Layout extends Component {
    render() {
        return (
            <div className="app">
                <Switch>
                    <Route path="/" exact component={Nosotros}/>
                    {/*<Route path="*" component={NotFound}/>*/}
                </Switch>
            </div>
        );
    }
}
export default Layout;

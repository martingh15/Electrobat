import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

//Router
import {Switch} from 'react-router';

//CSS
import "../assets/css/Layout.css";

//Componentes
import Nosotros from "./Nosotros";
import Baterias from "./Baterias";
import Servicios from "./Servicios";
import Contacto from "./Contacto";
import NotFound from "./NotFound";

class Layout extends Component {
    render() {
        return (
            <div className="app">
                <Switch>
                    <Route path="/" exact component={Nosotros}/>
                    <Route path="/baterias" exact component={Baterias}/>
                    {/*<Route path="*" component={NotFound}/>*/}
                </Switch>
            </div>
        );
    }
}
export default Layout;

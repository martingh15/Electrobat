import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

//Router
import {Switch} from 'react-router';

//CSS
import "../assets/css/Layout.css";

//Componentes
import Nosotros from "./secciones/Nosotros";
import Baterias from "./secciones/Baterias";
import BateriaDetalle from "./secciones/BateriaDetalle";
import Volquetes from "./secciones/Volquetes";
import Contacto from "./secciones/Contacto";
import NotFound from "./NotFound";

class Layout extends Component {
    render() {
        return (
            <div className="app">
                <Switch>
                    <Route path={["/","/nosotros"]} exact component={Nosotros}/>
                    <Route path="/baterias" exact component={Baterias}/>
                    <Route path="/bateria-detalle/:idBateria" exact component={BateriaDetalle}/>
                    <Route path="/volquetes" exact component={Volquetes}/>
                    {/*<Route path="*" component={NotFound}/>*/}
                </Switch>
            </div>
        );
    }
}
export default Layout;

import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

//Router
import {Switch} from 'react-router';

//Images
import whatsappVerde from "../assets/img/whatsapp-verde.png";

//CSS
import "../assets/css/Layout.css";

//Componentes
import Nosotros from "./secciones/Nosotros";
import Baterias from "./secciones/Baterias";
import BateriaDetalle from "./secciones/BateriaDetalle";
import Volquetes from "./secciones/Volquetes";
import Contacto from "./secciones/Contacto";
import NotFound from "./secciones/NotFound";

class Layout extends Component {
    render() {
        return (
            <div className="app">
                <Switch>
                    <Route path={["/","/nosotros"]} exact component={Nosotros}/>
                    <Route path="/baterias" exact component={Baterias}/>
                    <Route path="/bateria-detalle/:idBateria" exact component={BateriaDetalle}/>
                    <Route path="/volquetes" exact component={Volquetes}/>
                    <Route path="/contacto" exact component={Contacto}/>
                    <Route path="*" component={NotFound}/>
                </Switch>
                <a href={"https://wa.me/5493416868049"} target="_blank"  rel="noopener noreferrer">
                    <img className="whatsapp" src={whatsappVerde} alt="whatsap" title="whatsap"/>
                </a>
            </div>
        );
    }
}
export default Layout;

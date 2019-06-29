import React, {Component} from "react";
//CSS
import "../assets/css/Baterias.css";

//Components
import Header from "./Header";
import Footer from "../components/Footer";


//Images
import flechaAbajo from "../assets/img/angle-arrow-down.png";

class Baterias extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <div className="baterias">
                <div className="imagenBaterias">
                    <Header/>
                    <p className="textoBaterias">BATERIAS</p>
                    <img className="angle-arrow-down" src={flechaAbajo} alt="flechaAbajo"/>
                </div>
                <div className="subseccionBaterias">
                    <p className="item">
                        Somos una empresa dedicada al abastecimiento, prestación de <br/> servicios y ventas de
                        baterias
                        con 20 años de trayectoria en el rubro. <br/> Apuntamos a dar respuestas, de acuerdo a las
                        necesidades para cada <br/> exigencia concreta, colocando recursos frente a cada
                        requerimiento.
                        <br/> La empresa está integrada por personas con trayectoria, idoneidad <br/>
                        y experiencia, sumada a una permanente capacitación que afianza sus <br/>
                        niveles de liderazgo y competitividad.
                    </p>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Baterias;

import React, {Component} from "react";

//CSS
import "../../assets/css/Volquetes.css";

//Components
import Header from "../Header";
import Footer from "../../components/Footer";

//Images
import flechaAbajo from "../../assets/img/angle-arrow-down.png";
import volquete from "../../assets/img/volquetes/volquete.jpg";
import camion from "../../assets/img/volquetes/camion.jpg";

class Volquetes extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div className="volquetes">
                <div className="imagenVolquetes imagenFondo">
                    <Header/>
                    <p className="textoFondo">VOLQUETES</p>
                    <img className="angle-arrow-down" src={flechaAbajo} alt="flechaAbajo"/>
                </div>
                <div className="dosImagenes">
                    <img className="item" src={volquete} alt="volquete"/>
                    <img className="item" src={camion} alt="camion"/>
                </div>
                <div className="alquilerVolquetes">
                    <p className="alquiler">ALQUILER DE VOLQUETES</p>
                    <div className="lineaGruesa"></div>
                    <p className="rosario">ROSARIO Y ALREDEDORES</p>
                    <p className="mediano">MEDIANO | GRANDE</p>
                    <br/>
                    <p className="contactar"><b>CONTACTAR</b></p>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Volquetes;

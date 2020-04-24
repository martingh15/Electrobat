import React, {Component} from "react";
import {connect} from "react-redux";
import history from "../../history";

//CSS
import "../../assets/css/Volquetes.css";

//Components
import Header from "../Header";
import Footer from "../../components/Footer";
import Scrollchor from "react-scrollchor";


//Images
import flechaAbajo from "../../assets/img/angle-arrow-down.png";
import volquete from "../../assets/img/volquetes/originales/volquete.jpg";
import camion from "../../assets/img/volquetes/originales/camion.jpg";

//Actions
import {consultarVolquete} from "../../actions/Actions";

class Volquetes extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    contactar() {
        this.props.consultarVolquete();
        history.push("/contacto");
    }

    render() {
        return (
            <div className="volquetes">
                <div className="imagenVolquetes imagenFondo">
                    <Header/>
                    <div className="item"></div>
                    <div className="item" style={{display: "flex", flexDirection: "column"}}>
                        <p className="textoFondo"><span className="chiquito">ALQUILER DE</span><span
                            className="grandote">VOLQUETES</span></p>
                    </div>
                    <Scrollchor animate={{duration: 500, offset: 0}}
                                disableHistory={true}
                                to="#scroll-volquetes">
                        <img className="angle-arrow-down" src={flechaAbajo} alt="flechaAbajo" title="flechaAbajo"/>
                    </Scrollchor>
                </div>
                <div className="dosImagenes" id="scroll-volquetes">
                    <img className="item" src={volquete} alt="volquete" title="volquete"/>
                    <img className="item" src={camion} alt="camion" title="volquete"/>
                </div>
                <div className="alquilerVolquetes">
                    <p className="alquiler">ALQUILER DE VOLQUETES</p>
                    <div className="lineaGruesa"></div>
                    <p className="rosario">ROSARIO Y ALREDEDORES</p>
                    <p className="mediano">MEDIANO | GRANDE</p>
                    <br/>
                    <p onClick={() => this.contactar()} className="contactar"><b>CONTACTAR</b></p>
                </div>
                <Footer/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {};
}

const mapDispatchToProps = (dispatch) => {
    return {
        consultarVolquete: () => {
            dispatch(consultarVolquete())
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Volquetes);
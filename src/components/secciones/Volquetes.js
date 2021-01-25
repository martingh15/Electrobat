import React, { Component } from "react";
import { connect } from "react-redux";
import history from "../../history";
import Scrollchor from "react-scrollchor";

//CSS
import "../../assets/css/Volquetes.css";

//Components
import Header from "../Header";
import Footer from "../../components/Footer";
import SEO from "../elementos/SEO";


//Images
import flechaAbajo from "../../assets/img/angle-arrow-down.png";
import volquete from "../../assets/img/volquetes/originales/volquete.jpg";
import camion from "../../assets/img/volquetes/originales/camion.jpg";

//Actions
import { consultarVolquete } from "../../actions/Actions";

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
		let title = "Alquiler de volquetes. Rosario y alrededores. Tamaño mediano y grande";
        return (
            <div className="volquetes">
				<SEO 
					title={title} 
					keywords={title}
					description={title} 
					url="https://www.electrobatrosario.com/volquetes"
					ogImage="https://www.electrobatrosario.com/img/volquete.jpg"
					ogImageAlt="Volquetes Electrobat Rosario"
				/>
                <div className="imagenVolquetes imagenFondo">
                    <Header />
                    <div className="item"></div>
                    <div className="item" style={{ display: "flex", flexDirection: "column" }}>
                        <p className="textoFondo"><span className="chiquito">ALQUILER DE</span><span
                            className="grandote">VOLQUETES</span></p>
                    </div>
                    <Scrollchor animate={{ duration: 500, offset: 0 }}
                        disableHistory={true}
                        to="#scroll-volquetes">
                        <img className="angle-arrow-down" src={flechaAbajo} alt="flechaAbajo" title="flechaAbajo" />
                    </Scrollchor>
                </div>
                <div className="dosImagenes" id="scroll-volquetes">
                    <img className="item" src={volquete} alt="volquete" title="volquete" />
                    <img className="item" src={camion} alt="camion" title="volquete" />
                </div>
                <article className="alquilerVolquetes">
                    <h1 className="alquiler">ALQUILER DE VOLQUETES</h1>
                    <div className="lineaGruesa"></div>
                    <h2 className="rosario">ROSARIO Y ALREDEDORES</h2>
                    <h3 className="mediano">MEDIANO | GRANDE</h3>
                    <br />
                    <p onClick={() => this.contactar()} className="contactar"><b>CONTACTAR</b></p>
                </article>
                <Footer />
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
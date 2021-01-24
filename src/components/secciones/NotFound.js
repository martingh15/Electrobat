import React, {Component} from "react";
import {connect} from 'react-redux';
import history from "../../history";
import {Helmet} from "react-helmet";

//Components
import Header from "../Header";

//Images
import flechaAbajo from "../../assets/img/angle-arrow-down.png";

class NotFound extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        setTimeout(() => {
            history.push("/");
        }, 3000);
    }


    componentWillUnmount() {
    }

    render() {
		let title		= "Página no encontrada - Electrobat";
		let descripcion = "Somos una empresa dedicada al abastecimiento, prestación de servicios, ventas de baterias y alquiler de volquetes con 20 años de trayectoria en el rubro.";
		return (
            <div>
				<Helmet>
					<title>{title}</title>					
					<meta name="description" content={descripcion} />
				</Helmet>
                <div className="imagenNosotros imagenFondo" style={{height: "100vh"}}>
                    <Header/>
                    <p className="textoFondo">Página no encontrada, redirigiendo ...</p>
                    <img className="angle-arrow-down" src={flechaAbajo} alt="flechaAbajo" title="flechaAbajo"/>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
    }
};

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps,mapDispatchToProps)(NotFound);

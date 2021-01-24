import React, {Component} from "react";
import {connect} from 'react-redux';
import history from "../../history";

//Components
import Header from "../Header";
import Titulo from "../elementos/Titulo";

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
		return (
            <div>
				<Titulo title={"Página no encontrada"} />
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

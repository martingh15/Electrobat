import React, {Component} from "react";
import {connect} from 'react-redux';
import history from "../history";

//CSS
import "../assets/css/Footer.css";

//Images
import ubicacion from "../assets/img/location-pointer.png";
import telefono from "../assets/img/call-answer.png";
import email from "../assets/img/envelope.png";
import whatsap from "../assets/img/whatsapp.png";
import whatsappVerde from "../assets/img/whatsapp-verde.png";

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="footer">
                <div className="datos ubicacion" onClick={() => history.push("/contacto")}>
                    <img src={ubicacion} alt="ubicacion"/>
                    <p className="calle">Av. Córdoba 4031, Rosario, Santa Fe</p>
                </div>
                <div className="datos telefono">
                    <img src={telefono} alt="telefono"/>
                    <p><a href="tel:03414395703">(0341) 439 5703</a> | <a href="tel:341439634">(0341) 439 6347</a></p>

                </div>
                <a href="mailto: electrobat.baterias@gmail.com" target="_blank">
                    <div className="datos email">
                        <img src={email} alt="email"/>
                        <p>electrobat.baterias@gmail.com</p>
                    </div>
                </a>
                <a href={"https://wa.me/5493416868049"} target="_blank">
                    <div className="datos whatsap">
                        <img src={whatsap} alt="whatsap"/>
                        <p>+ 54 9 341 6868049</p>
                    </div>
                </a>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {};
}

const mapDispatchToProps = (dispatch) => {
    return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(Footer);

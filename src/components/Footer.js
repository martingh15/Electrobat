import React, {Component} from "react";
import history from "../history";

//CSS
import "../assets/css/Footer.css";

//Images
import ubicacion from "../assets/img/location-pointer.png";
import telefono from "../assets/img/call-answer.png";
import email from "../assets/img/envelope.png";
import whatsap from "../assets/img/whatsapp.png";

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="datos">
                    <img src={ubicacion} alt="ubicacion"/>
                    <p>Av. Córdoba 4031, Rosario, Santa Fe</p>
                </div>
                <div className="datos">
                    <img src={telefono} alt="telefono"/>
                    <p>(0341) 439 5703 | (0341) 439 6347</p>
                </div>
                <div className="datos">
                    <img src={email} alt="email"/>
                    <p>electrobat.baterias@gmail.com</p>
                </div>
                <div className="datos">
                    <img src={whatsap} alt="whatsap"/>
                    <p>+ 54 9 341 6868049</p>
                </div>
            </div>
        );
    }
}

export default Footer;

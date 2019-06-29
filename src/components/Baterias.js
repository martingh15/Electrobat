import React, {Component} from "react";
import {Col, Row} from "react-bootstrap";

//CSS
import "../assets/css/Baterias.css";

//Components
import Header from "./Header";
import Footer from "../components/Footer";

//Images
import flechaAbajo from "../assets/img/angle-arrow-down.png";
import logo from "../assets/img/logos/moura.png";
import moura from "../assets/img/logos/moura.png";
import acdelgo from "../assets/img/logos/acdelgo.png";
import yasua from "../assets/img/logos/Baterias_Yuasa.jpg";
import probattery from "../assets/img/logos/logo-probattery-400x400.png";
import trojan from "../assets/img/logos/TROJAN-LogoL.jpg";
import bateria1 from "../assets/img/baterias/bateria1.jpg";
import bateria2 from "../assets/img/baterias/bateria2.jpg";
import bateria3 from "../assets/img/baterias/bateria3.jpg";
import bateria4 from "../assets/img/baterias/bateria4.jpg";
import bateria5 from "../assets/img/baterias/bateria5.jpg";
import bateria6 from "../assets/img/baterias/bateria6.jpg";

class Baterias extends Component {
    constructor(props) {
        super(props);
        this.state = {};
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
                        Ofrecemos diferentes servicios automotores en general. <br/>
                        Comercializamos baterías para autos, camiones, utilitarios, tractores, <br/>
                        cortadoras de césped, náutica, autoelevadores, grupos electrógenos, U.P.S,<br/>
                        subestaciones, centrales telefónicas, alarmas, autos eléctricos (tipo golf).
                    </p>
                </div>
                <div className="logos">
                    <img src={logo} alt="electrobat"/>
                    <img src={moura} alt="logo1"/>
                    <img src={acdelgo} alt="logo2"/>
                    <img src={yasua} alt="logo3"/>
                    <img style={{maxHeight: "120px", width: "80px"}} src={probattery} alt="logo4"/>
                    <img src={trojan} alt="logo5"/>
                </div>
                <div className="galeriaBaterias">
                    <div className="cajaBateria">
                        <img src={bateria1} alt="bateria1"/>
                        <span className="hoverImg ">
                            <p>12 V. 70 AH.</p>
                        </span>
                    </div>
                    <div className="cajaBateria">
                        <img src={bateria2} alt="bateria2"/>
                        <span className="hoverImg">
                            <p>12 V. 75 AH.</p>
                        </span>

                    </div>
                    <div className="cajaBateria">
                        <img src={bateria3} alt="bateria3"/>
                        <span className="hoverImg">
                            <p>12 V. 100 AH.</p>
                        </span>
                    </div>
                </div>
                <div className="galeriaBaterias">
                    <div className="cajaBateria">
                        <img src={bateria4} alt="bateria4"/>
                        <span className="hoverImg">
                            <p>12 V. 100 AH.</p>
                        </span>
                    </div>
                    <div className="cajaBateria">
                        <img src={bateria5} alt="bateria5"/>
                        <span className="hoverImg">
                            <p>12 V. 110 AH.</p>
                        </span>
                    </div>
                    <div className="cajaBateria">
                        <img src={bateria6} alt="bateria6"/>
                        <span className="hoverImg">
                            <p>12 V. 180 AH.</p>
                        </span>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Baterias;

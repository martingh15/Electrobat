import React, {Component} from "react";

//CSS
import "../../assets/css/Baterias.css";

//Components
import Header from "../Header";
import Footer from "../../components/Footer";
import Scrollchor from "react-scrollchor";

//Images
import flechaAbajo from "../../assets/img/angle-arrow-down.png";
import logo from "../../assets/img/logoElectrobat.png";
import moura from "../../assets/img/logos/moura.png";
import acdelgo from "../../assets/img/logos/acdelgo.png";
import yasua from "../../assets/img/logos/Baterias_Yuasa.jpg";
import probattery from "../../assets/img/logos/logo-probattery-400x400.png";
import trojan from "../../assets/img/logos/TROJAN-LogoL.jpg";
import bateria1 from "../../assets/img/baterias/bateria1.png";
import bateria2 from "../../assets/img/baterias/bateria2.png";
import bateria3 from "../../assets/img/baterias/bateria3.png";
import bateria4 from "../../assets/img/baterias/bateria4.png";
import bateria5 from "../../assets/img/baterias/bateria5.png";
import bateria6 from "../../assets/img/baterias/bateria6.png";
import bateria7 from "../../assets/img/baterias/bateria7.png";
import bateria8 from "../../assets/img/baterias/bateria8.png";
import bateria9 from "../../assets/img/baterias/bateria9.png";
import bateria10 from "../../assets/img/baterias/bateria10.png";
import bateria11 from "../../assets/img/baterias/bateria11.png";
import history from "../../history";

class Baterias extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div className="baterias">
                <div className="imagenBaterias imagenFondo">
                    <Header/>
                    <div className="item"></div>
                    <div className="item" style={{display: "flex", flexDirection: "column"}}>
                        <h1 className="textoFondo"><span className="chiquito">VENTA DE</span><span className="grandote">BATERIAS</span></h1>
                    </div>
                    <Scrollchor animate={{duration: 500, offset: 0}}
                                disableHistory={true}
                                to="#scroll-baterias">
                        <img className="angle-arrow-down" src={flechaAbajo} alt="flechaAbajo"/>
                    </Scrollchor>
                </div>
                <div className="subseccionBaterias" id="scroll-baterias">
                    <p className="textoBaterias">
                        Ofrecemos diferentes <span style={{color: "yellow"}}>servicios automotores</span> en general.
                        Comercializamos baterías para autos, camiones, utilitarios, tractores,
                        cortadoras de césped, náutica, autoelevadores, grupos electrógenos, U.P.S,
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
                    <div className="cajaBateria"
                         onClick={() => history.push("/bateria-detalle/" + 9)}>
                        <img src={bateria9} alt="bateria6"/>
                        <span className="hoverImg">
                            <p className="innerText">12 V. 40 AH. Modelo NS 40</p>
                        </span>
                        <p>12 V. 40 AH.</p>
                    </div>
                    <div className="cajaBateria"
                         onClick={() => history.push("/bateria-detalle/" + 7)}>
                        <img src={bateria7} alt="bateria7"/>
                        <span className="hoverImg ">
                            <p className="innerText">12 V. 45 AH. Modelo Ford K</p>
                        </span>
                        <p>12 V. 45 AH.</p>
                    </div>
                    <div className="cajaBateria"
                         onClick={() => history.push("/bateria-detalle/" + 1)}>
                        <img src={bateria1} alt="bateria1"/>
                        <span className="hoverImg ">
                            <p className="innerText">12 V. 70 AH.</p>
                        </span>
                        <p>12 V. 70 AH.</p>
                    </div>
                </div>
                <div className="galeriaBaterias">
                    <div className="cajaBateria"
                         onClick={() => history.push("/bateria-detalle/" + 2)}>
                        <img src={bateria2} alt="bateria2"/>
                        <span className="hoverImg">
                            <p className="innerText">12 V. 75 AH.</p>
                        </span>
                        <p>12 V. 75 AH.</p>
                    </div>
                    <div className="cajaBateria"
                         onClick={() => history.push("/bateria-detalle/" + 8)}>
                        <img src={bateria8} alt="bateria7"/>
                        <span className="hoverImg ">
                            <p className="innerText">12 V. 85 AH. Modelo Ranger</p>
                        </span>
                        <p>12 V. 85 AH.</p>
                    </div>
                    <div className="cajaBateria"
                         onClick={() => history.push("/bateria-detalle/" + 10)}>
                        <img src={bateria10} alt="bateria10"/>
                        <span className="hoverImg ">
                            <p className="innerText">12 V. 85 AH. Modelo N70Z</p>
                        </span>
                        <p>12 V. 85 AH.</p>
                    </div>
                </div>
                <div className="galeriaBaterias">
                    <div className="cajaBateria"
                         onClick={() => history.push("/bateria-detalle/" + 3)}>
                        <img src={bateria3} alt="bateria3"/>
                        <span className="hoverImg">
                            <p className="innerText">12 V. 100 AH.</p>
                        </span>
                        <p>12 V. 100 AH.</p>
                    </div>
                    <div className="cajaBateria"
                         onClick={() => history.push("/bateria-detalle/" + 4)}>
                        <img src={bateria4} alt="bateria4"/>
                        <span className="hoverImg">
                            <p className="innerText">12 V. 100 AH.</p>
                        </span>
                        <p>12 V. 100 AH.</p>
                    </div>
                    <div className="cajaBateria"
                         onClick={() => history.push("/bateria-detalle/" + 11)}>
                        <img src={bateria11} alt="bateria11"/>
                        <span className="hoverImg">
                            <p className="innerText">12 V. 100 AH. Modelo N75Z</p>
                        </span>
                        <p>12 V. 100 AH.</p>
                    </div>
                </div>
                <div className="galeriaBaterias">
                    <div className="cajaBateria"
                         onClick={() => history.push("/bateria-detalle/" + 5)}>
                        <img src={bateria5} alt="bateria5"/>
                        <span className="hoverImg">
                            <p className="innerText">12 V. 110 AH.</p>
                        </span>
                        <p>12 V. 110 AH.</p>
                    </div>
                    <div className="cajaBateria"
                         onClick={() => history.push("/bateria-detalle/" + 6)}>
                        <img src={bateria6} alt="bateria6"/>
                        <span className="hoverImg">
                            <p className="innerText">12 V. 180 AH.</p>
                        </span>
                        <p>12 V. 180 AH.</p>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Baterias;

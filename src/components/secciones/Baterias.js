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
import moura from "../../assets/img/logos/originales/moura.png";
import acdelgo from "../../assets/img/logos/originales/acdelgo.png";
import yasua from "../../assets/img/logos/originales/Baterias_Yuasa.jpg";
import probattery from "../../assets/img/logos/originales/logo-probattery-400x400.png";
import trojan from "../../assets/img/logos/originales/TROJAN-LogoL.jpg";
import bateria12V70AHAutosNafterosGNC1 from "../../assets/img/baterias/originales/bateria-12V-70AH-1-autos-nafteros-gnc.png";
import bateria12V75AHAutosDiesel2 from "../../assets/img/baterias/originales/bateria-12V-75AH-2-autos-diesel.png";
import bateria12V100AHCamionesTractores3 from "../../assets/img/baterias/originales/bateria-12V-100AH-3-camiones-tractores.png";
import bateria12V100AHCamionetasDieselModeloSprinter4 from "../../assets/img/baterias/originales/bateria-12V-100AH-camionetas-diesel-modelo-sprinter-4.png";
import bateria12V110AHCamionetasTractores5
    from "../../assets/img/baterias/originales/bateria-12V-110AH-5-camionetas-tractores.png";
import bateria12V180AHCamionesTractores6 from "../../assets/img/baterias/originales/bateria-12V-180AH-6-camiones-tractores.png";
import bateria12V45AHFordK7 from "../../assets/img/baterias/originales/bateria-12V-45AH-7-ford-k.png";
import bateria12V85AHModeloRanger8 from "../../assets/img/baterias/originales/bateria-12V-85AH-8-modelo-ranger.png";
import bateria12V40AHHondaFitKia9 from "../../assets/img/baterias/originales/bateria-12V-40AH-9-honda-fit-kia.png";
import bateria12V85AHTraficToyotaHilux10 from "../../assets/img/baterias/originales/bateria-12V-85AH-10-trafic-toyota-hilux.png";
import bateria12V100AHToyotaHiluxKiaSorento11
    from "../../assets/img/baterias/originales/bateria-12V-100AH-11-toyota-hilux-kia-sorento.png";
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
                        <h1 className="textoFondo"><span className="chiquito">VENTA DE</span><span
                            className="grandote">BATERIAS</span></h1>
                    </div>
                    <Scrollchor animate={{duration: 500, offset: 0}}
                                disableHistory={true}
                                to="#scroll-baterias">
                        <img className="angle-arrow-down" src={flechaAbajo} alt="flechaAbajo" title="flechaAbajo"/>
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
                    <img src={logo} alt="electrobat" title="electrobat"/>
                    <img src={moura} alt="moura" title="moura"/>
                    <img src={acdelgo} alt="acdelgo" title="acdelgo"/>
                    <img src={yasua} alt="yasua" title="yasua"/>
                    <img style={{maxHeight: "120px", width: "80px"}} src={probattery} alt="probattery"
                         title="probattery"/>
                    <img src={trojan} alt="trojan" title="trojan"/>
                </div>
                <div className="galeriaBaterias">
                    <article className="cajaBateria"
                         onClick={() => history.push("/bateria-detalle/" + 9)}>
                        <img src={bateria12V40AHHondaFitKia9} alt="bateria12V40AHHondaFitKia9"
                             title="bateria12V40AHHondaFitKia9"/>
                        <span className="hoverImg">
                            <p className="innerText">12 V. 40 AH. Modelo NS 40</p>
                        </span>
                        <p>12 V. 40 AH.</p>
                    </article>
                    <article className="cajaBateria"
                         onClick={() => history.push("/bateria-detalle/" + 7)}>
                        <img src={bateria12V45AHFordK7} alt="bateria12V45AHFordK7" title="bateria12V45AHFordK7"/>
                        <span className="hoverImg ">
                            <p className="innerText">12 V. 45 AH. Modelo Ford K</p>
                        </span>
                        <p>12 V. 45 AH.</p>
                    </article>
                    <article className="cajaBateria"
                         onClick={() => history.push("/bateria-detalle/" + 1)}>
                        <img src={bateria12V70AHAutosNafterosGNC1} alt="bateria12V70AHAutosNafterosGNC1"
                             title="bateria12V70AHAutosNafterosGNC1"/>
                        <span className="hoverImg ">
                            <p className="innerText">12 V. 70 AH.</p>
                        </span>
                        <p>12 V. 70 AH.</p>
                    </article>
                </div>
                <div className="galeriaBaterias">
                    <article className="cajaBateria"
                         onClick={() => history.push("/bateria-detalle/" + 2)}>
                        <img src={bateria12V75AHAutosDiesel2} alt="bateria12V75AHAutosDiesel2"
                             title="bateria12V75AHAutosDiesel2"/>
                        <span className="hoverImg">
                            <p className="innerText">12 V. 75 AH.</p>
                        </span>
                        <p>12 V. 75 AH.</p>
                    </article>
                    <article className="cajaBateria"
                         onClick={() => history.push("/bateria-detalle/" + 8)}>
                        <img src={bateria12V85AHModeloRanger8} alt="bateria12V85AHModeloRanger8"
                             title="bateria12V85AHModeloRanger8"/>
                        <span className="hoverImg ">
                            <p className="innerText">12 V. 85 AH. Modelo Ranger</p>
                        </span>
                        <p>12 V. 85 AH.</p>
                    </article>
                    <article className="cajaBateria"
                         onClick={() => history.push("/bateria-detalle/" + 10)}>
                        <img src={bateria12V85AHTraficToyotaHilux10} alt="bateria12V85AHTraficToyotaHilux10"
                             title="bateria12V85AHTraficToyotaHilux10"/>
                        <span className="hoverImg ">
                            <p className="innerText">12 V. 85 AH. Modelo N70Z</p>
                        </span>
                        <p>12 V. 85 AH.</p>
                    </article>
                </div>
                <div className="galeriaBaterias">
                    <article className="cajaBateria"
                         onClick={() => history.push("/bateria-detalle/" + 3)}>
                        <img src={bateria12V100AHCamionesTractores3} alt="bateria12V70AHAutosNafterosGNC1"
                             title="bateria12V70AHAutosNafterosGNC1"/>
                        <span className="hoverImg">
                            <p className="innerText">12 V. 100 AH.</p>
                        </span>
                        <p>12 V. 100 AH.</p>
                    </article>
                    <article className="cajaBateria"
                         onClick={() => history.push("/bateria-detalle/" + 4)}>
                        <img src={bateria12V100AHCamionetasDieselModeloSprinter4}
                             alt="bateria12V100AHCamionetasDieselModeloSprinter4"
                             title="bateria12V100AHCamionetasDieselModeloSprinter4"/>
                        <span className="hoverImg">
                            <p className="innerText">12 V. 100 AH.</p>
                        </span>
                        <p>12 V. 100 AH.</p>
                    </article>
                    <article className="cajaBateria"
                         onClick={() => history.push("/bateria-detalle/" + 11)}>
                        <img src={bateria12V100AHToyotaHiluxKiaSorento11} alt="bateria12V100AHToyotaHiluxKiaSorento11"
                             title="bateria12V100AHToyotaHiluxKiaSorento11"/>
                        <span className="hoverImg">
                            <p className="innerText">12 V. 100 AH. Modelo N75Z</p>
                        </span>
                        <p>12 V. 100 AH.</p>
                    </article>
                </div>
                <div className="galeriaBaterias">
                    <article className="cajaBateria"
                         onClick={() => history.push("/bateria-detalle/" + 5)}>
                        <img src={bateria12V110AHCamionetasTractores5} alt="bateria12V110AHCamionetasTractores5"
                             title="bateria12V110AHCamionetasTractores5"/>
                        <span className="hoverImg">
                            <p className="innerText">12 V. 110 AH.</p>
                        </span>
                        <p>12 V. 110 AH.</p>
                    </article>
                    <article className="cajaBateria"
                         onClick={() => history.push("/bateria-detalle/" + 6)}>
                        <img src={bateria12V180AHCamionesTractores6} alt="bateria12V180AHCamionesTractores6"
                             title="bateria12V180AHCamionesTractores6"/>
                        <span className="hoverImg">
                            <p className="innerText">12 V. 180 AH.</p>
                        </span>
                        <p>12 V. 180 AH.</p>
                    </article>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Baterias;

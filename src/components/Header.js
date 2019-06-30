import React, {Component} from "react";
import {Navbar, Nav} from 'react-bootstrap';

import history from "../history";

//CSS
import "../assets/css/Header.css";

//Images
import facebook from "../assets/img/facebook(64-FFFA21).png";
import instagram from "../assets/img/instagram(64-FFFA21).png";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
        };
    }

    componentDidMount() {
        if (window.location.href.indexOf("nosotros") != -1) {
            this.refs.nosotros.classList.add("activo");
            this.refs.baterias.classList.remove("activo");
            this.refs.volquetes.classList.remove("activo");
            this.refs.contacto.classList.remove("activo");
        }

        if (window.location.href.indexOf("baterias") != -1) {
            this.refs.nosotros.classList.remove("activo");
            this.refs.baterias.classList.add("activo");
            this.refs.volquetes.classList.remove("activo");
            this.refs.contacto.classList.remove("activo");
        }

        if (window.location.href.indexOf("volquetes") != -1) {
            this.refs.nosotros.classList.remove("activo");
            this.refs.baterias.classList.remove("activo");
            this.refs.volquetes.classList.add("activo");
            this.refs.contacto.classList.remove("activo");
        }

        if (window.location.href.indexOf("contacto") != -1) {
            this.refs.nosotros.classList.remove("activo");
            this.refs.baterias.classList.remove("activo");
            this.refs.volquetes.classList.remove("activo");
            this.refs.contacto.classList.add("activo");
        }
    }

    activarLink(clase) {
        if (clase == "nosotros") {
            this.refs.nosotros.classList.add("activo");
            this.refs.baterias.classList.remove("activo");
            this.refs.volquetes.classList.remove("activo");
            this.refs.contacto.classList.remove("activo");
        }

        if (clase == "baterias") {
            this.refs.nosotros.classList.remove("activo");
            this.refs.baterias.classList.add("activo");
            this.refs.volquetes.classList.remove("activo");
            this.refs.contacto.classList.remove("activo");
        }

        if (clase == "volquetes") {
            this.refs.nosotros.classList.remove("activo");
            this.refs.baterias.classList.remove("activo");
            this.refs.volquetes.classList.add("activo");
            this.refs.contacto.classList.remove("activo");
        }

        if (clase == "contacto") {
            this.refs.nosotros.classList.remove("activo");
            this.refs.baterias.classList.remove("activo");
            this.refs.volquetes.classList.remove("activo");
            this.refs.contacto.classList.add("activo");
        }
        history.push("/" + clase);
    }

    render() {
        const {collapse} = this.state;

        return (
            <div className="header">
                <div className="navegador">
                    <p>Logo</p>
                    <div className="links">
                        <p ref="nosotros" className="nosotros" onClick={() => this.activarLink("nosotros")}>NOSOTROS</p>
                        <p ref="baterias" className="baterias" onClick={() => this.activarLink("baterias")}>BATERIAS</p>
                        <p ref="volquetes" className="volquetes"
                           onClick={() => this.activarLink("volquetes")}>VOLQUETES</p>
                        <p ref="contacto" className="contacto" onClick={() => this.activarLink("contacto")}>CONTACTO</p>
                        <div className="boton-responsive" onClick={() => this.setState({collapse: !collapse})}>
                            <div className="lineaBoton"></div>
                            <div className="lineaBoton"></div>
                            <div className="lineaBoton"></div>
                        </div>
                    </div>
                </div>
                <div className="navegadorCollapse" style={{display: collapse ? "block" : "none"}}>
                    <p ref="nosotros" className="nosotros" onClick={() => this.activarLink("nosotros")}>NOSOTROS</p>
                    <p ref="baterias" className="baterias" onClick={() => this.activarLink("baterias")}>BATERIAS</p>
                    <p ref="volquetes" className="volquetes"
                       onClick={() => this.activarLink("volquetes")}>VOLQUETES</p>
                    <p ref="contacto" className="contacto" onClick={() => this.activarLink("contacto")}>CONTACTO</p>
                </div>
                <div className="media">
                    <img className="itemMedia" src={facebook} alt="facebook"/>
                    <img className="itemMedia" src={instagram} alt="instagram"/>
                </div>
            </div>
        );
    }
}

export default Header;

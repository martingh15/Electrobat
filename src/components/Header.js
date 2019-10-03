import React, {Component} from "react";

import history from "../history";

//CSS
import "../assets/css/Header.css";

//Images
import facebook from "../assets/img/facebook(64-FFFA21).png";
import instagram from "../assets/img/instagram(64-FFFA21).png";
import logoElectrobat from "../assets/img/logoElectrobat.png";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
        };
    }

    componentDidMount() {
        var list1 = document.getElementsByClassName("h-nosotros");
        var list2 = document.getElementsByClassName("h-baterias");
        var list3 = document.getElementsByClassName("h-volquetes");
        var list4 = document.getElementsByClassName("h-contacto");
        if (window.location.href.indexOf("nosotros") !== -1) {
            for (let item of list1)
                item.classList.add("activo");
            for (let item of list2)
                item.classList.remove("activo");
            for (let item of list3)
                item.classList.remove("activo");
            for (let item of list4)
                item.classList.remove("activo");
        }

        if (window.location.href.indexOf("baterias") !== -1) {
            for (let item of list1)
                item.classList.remove("activo");
            for (let item of list2)
                item.classList.add("activo");
            for (let item of list3)
                item.classList.remove("activo");
            for (let item of list4)
                item.classList.remove("activo");
        }

        if (window.location.href.indexOf("volquetes") !== -1) {
            for (let item of list1)
                item.classList.remove("activo");
            for (let item of list2)
                item.classList.remove("activo");
            for (let item of list3)
                item.classList.add("activo");
            for (let item of list4)
                item.classList.remove("activo");
        }

        if (window.location.href.indexOf("contacto") !== -1) {
            for (let item of list1)
                item.classList.remove("activo");
            for (let item of list2)
                item.classList.remove("activo");
            for (let item of list3)
                item.classList.remove("activo");
            for (let item of list4)
                item.classList.add("activo");
        }
    }

    activarLink(clase) {
        var list1 = document.getElementsByClassName("h-nosotros");
        var list2 = document.getElementsByClassName("h-baterias");
        var list3 = document.getElementsByClassName("h-volquetes");
        var list4 = document.getElementsByClassName("h-contacto");
        if (clase === "h-nosotros") {
            for (let item of list1)
                item.classList.add("activo");
            for (let item of list2)
                item.classList.remove("activo");
            for (let item of list3)
                item.classList.remove("activo");
            for (let item of list4)
                item.classList.remove("activo");
        }

        if (clase === "h-baterias") {
            for (let item of list1)
                item.classList.remove("activo");
            for (let item of list2)
                item.classList.add("activo");
            for (let item of list3)
                item.classList.remove("activo");
            for (let item of list4)
                item.classList.remove("activo");
        }

        if (clase === "h-volquetes") {
            for (let item of list1)
                item.classList.remove("activo");
            for (let item of list2)
                item.classList.remove("activo");
            for (let item of list3)
                item.classList.add("activo");
            for (let item of list4)
                item.classList.remove("activo");
        }

        if (clase === "h-contacto") {
            for (let item of list1)
                item.classList.remove("activo");
            for (let item of list2)
                item.classList.remove("activo");
            for (let item of list3)
                item.classList.remove("activo");
            for (let item of list4)
                item.classList.add("activo");
        }
        history.push("/" + clase);
    }

    render() {
        const {collapse} = this.state;

        return (
            <div className="header item">
                <div className="navegador">
                    <img className="logoElectrobat" onClick={() => this.activarLink("nosotros")} src={logoElectrobat} alt="logo" title="logo"/>
                    <div className="links">
                        <p id="h1-nosotros" className="h-nosotros"
                           onClick={() => this.activarLink("nosotros")}>NOSOTROS</p>
                        <p id="h1-baterias" className="h-baterias"
                           onClick={() => this.activarLink("baterias")}>BATERIAS</p>
                        <p id="h1-volquetes" className="h-volquetes"
                           onClick={() => this.activarLink("volquetes")}>VOLQUETES</p>
                        <p id="h1-contacto" className="h-contacto"
                           onClick={() => this.activarLink("contacto")}>CONTACTO</p>
                        <div className="boton-responsive" onClick={() => this.setState({collapse: !collapse})}>
                            <div className="lineaBoton"></div>
                            <div className="lineaBoton"></div>
                            <div className="lineaBoton"></div>
                        </div>
                    </div>
                </div>
                <div className="navegadorCollapse" style={{display: collapse ? "block" : "none"}}>
                    <p id="h2-nosotros" className="h-nosotros"
                       onClick={() => this.activarLink("nosotros")}>NOSOTROS</p>
                    <p id="h2-baterias" className="h-baterias"
                       onClick={() => this.activarLink("baterias")}>BATERIAS</p>
                    <p id="h2-volquetes" className="h-volquetes"
                       onClick={() => this.activarLink("volquetes")}>VOLQUETES</p>
                    <p id="h2-contacto" className="h-contacto"
                       onClick={() => this.activarLink("contacto")}>CONTACTO</p>
                </div>
                <div className="media">
                    <a style={{display: this.state.collapse ? "none" : "block"}} href="https://m.facebook.com/profile.php?id=2455198884548919&changedcover=1" target="_blank"  rel="noopener noreferrer">
                        <img className="itemMedia" src={facebook} alt="facebook" title="facebook"/>
                    </a>
                    <a style={{display: this.state.collapse ? "none" : "block"}} href="https://m.instagram.com/electrobatrosario" target="_blank"  rel="noopener noreferrer">
                        <img className="itemMedia" src={instagram} alt="instagram" title="instagram"/>
                    </a>
                </div>
            </div>
        );
    }
}

export default Header;

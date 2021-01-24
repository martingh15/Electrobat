import React, { Component } from "react";

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
            collapse: false
        };
    }

    componentDidMount() {
        let list1 = document.getElementsByClassName("h-nosotros");
        let list2 = document.getElementsByClassName("h-baterias");
        let list3 = document.getElementsByClassName("h-volquetes");
        let list4 = document.getElementsByClassName("h-contacto");
		this.activarLink(list1, list2, list3, list3);
		if (window.location.href.indexOf("baterias") !== -1 || window.location.href.indexOf("bateria-detalle") !== -1) {
            this.activarLink(list2, list1, list3, list3);
        } 
		if (window.location.href.indexOf("volquetes") !== -1) {
			this.activarLink(list3, list1, list2, list4);
        } 
		if (window.location.href.indexOf("contacto") !== -1) {
			this.activarLink(list4, list1, list2, list3);
        }
    }
	
	activarLink(listaActivar, listaDesactivar1, listaDesactivar2, listaDesactivar3) {
		this.activar(listaActivar);
		this.desactivar(listaDesactivar1);
		this.desactivar(listaDesactivar2);
		this.desactivar(listaDesactivar3);
	}
	
	activar(lista) {
		for (let item of lista)
            item.classList.add("activo");
	}
	
	desactivar(lista) {
		for (let item of lista)
			item.classList.remove("activo");
	}

    render() {
        const { collapse } = this.state;

        return (
            <header className="header item">
                <nav className="navegador">
					<a href="/" >
						<img className="logoElectrobat" src={logoElectrobat} alt="logo" title="logo" />
					</a>
					<div className="links">
                        <a id="h1-nosotros" className="h-nosotros links-link" href="/nosotros">NOSOTROS</a>
                        <a id="h1-baterias" className="h-baterias links-link" href="/baterias">BATERIAS</a>
                        <a id="h1-volquetes" className="h-volquetes links-link" href="/volquetes">VOLQUETES</a>
                        <a id="h1-contacto" className="h-contacto links-link" href="/contacto">CONTACTO</a>
                        <div className="boton-responsive" onClick={() => this.setState({ collapse: !collapse })}>
                            <div className="lineaBoton"></div>
                            <div className="lineaBoton"></div>
                            <div className="lineaBoton"></div>
                        </div>
                    </div>
                </nav>
                <nav className="navegadorCollapse" style={{ height: collapse ? "170px" : "0", border: collapse ? "inherit" : "none"}}>
                    <a id="h2-nosotros" className="h-nosotros links-link" href="/nosotros">NOSOTROS</a>
                    <a id="h2-baterias" className="h-baterias links-link" href="/baterias">BATERIAS</a>
                    <a id="h2-volquetes" className="h-volquetes links-link" href="/volquetes">VOLQUETES</a>
                    <a id="h2-contacto" className="h-contacto links-link" href="/contacto">CONTACTO</a>
                </nav>
                <aside className="media">
                    <a style={{ display: this.state.collapse ? "none" : "block" }} href="https://m.facebook.com/profile.php?id=2455198884548919&changedcover=1" target="_blank" rel="noopener noreferrer">
                        <img className="itemMedia" src={facebook} alt="facebook" title="facebook" />
                    </a>
                    <a style={{ display: this.state.collapse ? "none" : "block" }} href="https://m.instagram.com/electrobatrosario" target="_blank" rel="noopener noreferrer">
                        <img className="itemMedia" src={instagram} alt="instagram" title="instagram" />
                    </a>
                </aside>
            </header>
        );
    }
}

export default Header;

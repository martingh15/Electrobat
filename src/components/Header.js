import React, {Component} from "react";
import {Navbar, Nav} from 'react-bootstrap';

import history from "../history";

//CSS
import "../assets/css/Header.css";

//Images
import facebook from "../assets/img/facebook(64-FFFA21).png"
import instagram from "../assets/img/instagram(64-FFFA21).png"

class Header extends Component {
    render() {
        return (
            <div className="header">
                <Navbar className="navegador" collapseOnSelect expand="lg">
                    <Navbar.Brand href="#home">Electrobat</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                        </Nav>
                        <Nav>
                            <Nav.Link eventKey={1} onClick={() => history.push("/")}>NOSOTROS</Nav.Link>
                            <Nav.Link eventKey={2} onClick={() => history.push("/baterias")}>BATERÍAS</Nav.Link>
                            <Nav.Link eventKey={3} onClick={() => history.push("/volquetes")}>VOLQUETES</Nav.Link>
                            <Nav.Link eventKey={4} onClick={() => history.push("/contacto")}>CONTACTO</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <div className="media">
                    <img className="facebook" src={facebook} alt="facebook"/>
                    <img className="facebook" src={instagram} alt="instagram"/>
                </div>
            </div>
        );
    }
}

export default Header;

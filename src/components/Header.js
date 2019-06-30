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
            active: 'nosotros',
        };
    }

    render() {
        const {active} = this.state;
        return (
            <div className="header">
                <Navbar className="navegador" collapseOnSelect expand="lg">
                    <Navbar.Brand href="#home">Electrobat</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                        </Nav>
                        <Nav>
                            <Nav.Link eventKey={1}>
                                <p style={{
                                    color: active == "nosotros" ? "yellow" : "white",
                                    fontWeight: active ? "bold" : "100",
                                    height: "100%",
                                    margin: "0 auto",
                                }} onClick={() => {
                                    this.setState({active: "nosotros"});
                                    history.push("/nosotros");
                                }}>NOSOTROS</p>
                            </Nav.Link>
                            <Nav.Link eventKey={2}>
                                <p style={{
                                    color: active == "baterias" ? "yellow" : "white",
                                    fontWeight: active ? "bold" : "100",
                                    height: "100%",
                                    margin: "0 auto",
                                }} onClick={() => {
                                    this.setState({active: "baterias"});
                                    history.push("/baterias");
                                }}>BATERÍAS</p>
                            </Nav.Link>
                            <Nav.Link eventKey={3}>
                                <p style={{
                                    color: active == "volquetes" ? "yellow" : "white",
                                    fontWeight: active ? "bold" : "100",
                                    height: "100%",
                                    margin: "0 auto",
                                }} onClick={() => {
                                    this.setState({active: "volquetes"});
                                    history.push("/volquetes");
                                }}>VOLQUETES</p>
                            </Nav.Link>
                            <Nav.Link eventKey={4}>
                                <p style={{
                                    color: active == "contacto" ? "yellow" : "white",
                                    fontWeight: active ? "bold" : "100",
                                    height: "100%",
                                    margin: "0 auto",
                                }} onClick={() => {
                                    this.setState({active: "contacto"});
                                    history.push("/contacto");
                                }}>CONTACTO</p>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <div className="media">
                    <img className="itemMedia" src={facebook} alt="facebook"/>
                    <img className="itemMedia" src={instagram} alt="instagram"/>
                </div>
            </div>
        );
    }
}

export default Header;

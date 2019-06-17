import React, {Component} from "react";
import {connect} from 'react-redux';

import { Navbar, Nav, NavDropdown, Button, FormControl, Form } from 'react-bootstrap';
import {NavLink} from "react-router-dom";

import history from "../history";

//Images
import bateria from "../assets/img/battery.png";

//CSS
import "../assets/css/Navegador.css";

class Navegador extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount() {
    }


    componentWillUnmount() {
    }

    render() {
        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link onClick={() => history.push("/productos")}>Productos</Nav.Link>
                        <Nav.Link onClick={() => history.push("/servicios")}>Servicios</Nav.Link>
                        <Nav.Link onClick={() => history.push("/contacto")}>Contacto</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

function mapStateToProps(state) {
    return {
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
    }
};

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps,mapDispatchToProps)(Navegador);

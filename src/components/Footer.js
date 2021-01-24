import React, {Component} from "react";
import {connect} from 'react-redux';

//CSS
import "../assets/css/Footer.css";

//Images
import ubicacion from "../assets/img/ubicacionF.png";
import telefono from "../assets/img/telefonoF.png";
import email from "../assets/img/emailF.png";
import whatsap from "../assets/img/whatsapp.png";

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <footer>
                <div className="footer-center">
                    <div className="footer">
                        <a href="https://goo.gl/maps/8m1tjntq3en7P39E9" target="_blank" rel="noopener noreferrer" className="datos ubicacion">
                            <img src={ubicacion} alt="ubicacion" title="ubicacion"/>
                            <p className="texto calle">Av. Córdoba 4031, Rosario, Santa Fe</p>
                        </a>
                        <a href="tel:03414395703" className="datos telefono">
                            <img src={telefono} alt="telefono" title="telefono"/>
                            <p className="texto">(0341) 439 5703 | (0341) 439 6347</p>
                        </a>
                        <a href="mailto: electrobat.baterias@gmail.com" target="_blank" rel="noopener noreferrer" className="datos email">
                            <img src={email} alt="email" title="email"/>
                            <p className="texto">electrobat.baterias@gmail.com</p>
                        </a>
                        <a href={"https://wa.me/5493416868049"} target="_blank" rel="noopener noreferrer" className="datos whatsap">
                            <img src={whatsap} alt="whatsap" title="whatsap"/>
                            <p className="texto">+ 54 9 341 6868049</p>
                        </a>
                    </div>
                </div>
            </footer>
        );
    }
}

function mapStateToProps(state) {
    return {};
}

const mapDispatchToProps = (dispatch) => {
    return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(Footer);

import React, {Component} from "react";
import {connect} from 'react-redux';
import $ from "jquery";
import OwlCarousel from 'react-owl-carousel';


//CSS
import "../assets/css/Nosotros.css";

//Components
import Header from "./Header";

//Images
import flechaAbajo from "../assets/img/angle-arrow-down.png";
import bateriaMini from "../assets/img/bateriamini.png";
import flete from "../assets/img/fletes.png";
import contacto from "../assets/img/contacto.png";
import slider1 from "../assets/img/sliders/slider1.jpg";
import slider2 from "../assets/img/sliders/slider2.jpg";
import slider3 from "../assets/img/sliders/slider3.jpg";
import slider4 from "../assets/img/sliders/slider4.jpg";
import slider5 from "../assets/img/sliders/slider5.jpg";
import slider6 from "../assets/img/sliders/slider6.jpg"
import flechaIzq from "../assets/img/left-arrow.png";
import flechaDer from "../assets/img/right-arrow.png";

class Nosotros extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {

    }

    next() {
        this.refs.owldemo.next();
    }

    prev() {
        this.refs.owldemo.prev();
    }

    render() {
        return (
            <div className="nosotros">
                <div className="imagenNosotros">
                    <Header/>
                    <p className="textoNosotros">NOSOTROS</p>
                    <img className="angle-arrow-down" src={flechaAbajo} alt="flechaAbajo"/>
                </div>
                <div className="subseccionNosotros">
                    <div className="item iconos">
                        <div className="itemIco">
                            <img src={bateriaMini} alt="bateria"/>
                        </div>
                        <div className="itemIco">
                            <img src={flete} alt="flete"/>
                        </div>
                        <div className="itemIco">
                            <img src={contacto} alt="contacto"/>
                        </div>
                    </div>
                    <p className="item">
                        Somos una empresa dedicada al abastecimiento, prestación de <br/> servicios y ventas de
                        baterias
                        con 20 años de trayectoria en el rubro. <br/> Apuntamos a dar respuestas, de acuerdo a las
                        necesidades para cada <br/> exigencia concreta, colocando recursos frente a cada
                        requerimiento.
                        <br/> La empresa está integrada por personas con trayectoria, idoneidad <br/>
                        y experiencia, sumada a una permanente capacitación que afianza sus <br/>
                        niveles de liderazgo y competitividad.
                    </p>
                </div>
                <div className="carousel">
                    <img className="flechaIzq flecha" onClick={() => this.prev()} src={flechaIzq} alt="flecha-izq"/>
                    <img className="flechaDer flecha" onClick={() => this.next()} src={flechaDer} alt="flecha-next"/>
                    <OwlCarousel ref="owldemo" className="owl-theme itemC" loop
                                 items={4}
                                 margin={10}
                                 autoplay
                                 onInitialize={function () {
                                     this.next();
                                 }}
                                 dots={false}
                                 autoplayTimeout={7000}>
                        <div className="item"><img src={slider1} alt="Owl Image"/></div>
                        <div className="item"><img src={slider2} alt="Owl Image"/></div>
                        <div className="item"><img src={slider3} alt="Owl Image"/></div>
                        <div className="item"><img src={slider4} alt="Owl Image"/></div>
                        <div className="item"><img src={slider5} alt="Owl Image"/></div>
                        <div className="item"><img src={slider6} alt="Owl Image"/></div>
                    </OwlCarousel>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {};
}

const mapDispatchToProps = (dispatch) => {
    return {}
};

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(Nosotros);

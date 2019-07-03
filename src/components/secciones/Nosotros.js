import React, {Component} from "react";
import {connect} from 'react-redux';
import OwlCarousel from 'react-owl-carousel';

//CSS
import "../../assets/css/Nosotros.css";

//Components
import Header from "../Header";

//Images
import flechaAbajo from "../../assets/img/angle-arrow-down.png";
import bateriaMini from "../../assets/img/bateriamini.png";
import flete from "../../assets/img/fletes.png";
import contacto from "../../assets/img/contacto.png";
import slider1 from "../../assets/img/sliders/slider1.jpg";
import slider2 from "../../assets/img/sliders/slider2.jpg";
import slider3 from "../../assets/img/sliders/slider3.jpg";
import slider4 from "../../assets/img/sliders/slider4.jpg";
import slider5 from "../../assets/img/sliders/slider5.jpg";
import slider6 from "../../assets/img/sliders/slider6.jpg"
import flechaIzq from "../../assets/img/left-arrow.png";
import flechaDer from "../../assets/img/right-arrow.png";

//Components
import Footer from "../../components/Footer";
import ImagenModal from "../ImagenModal";
import history from "../../history";
import Scrollchor from "react-scrollchor";

class Nosotros extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imagen: null,
            show: false,
        };
        this.onHide = this.onHide.bind(this);
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    resizeImage(e, img) {
        this.setState({
            imagen: img,
            show: true,
        });
    }

    onHide() {
        this.setState({show: false});
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
                <ImagenModal
                    key="modal-1"
                    onHide={this.onHide.bind(this)}
                    show={this.state.show} imagen={this.state.imagen}/>
                <div className="imagenNosotros imagenFondo">
                    <Header/>
                    <p className="textoFondo">NOSOTROS</p>
                    <Scrollchor animate={{duration: 500, offset: 0}}
                                disableHistory={true}
                                to="#scroll-nosotros">
                        <img className="angle-arrow-down" src={flechaAbajo} alt="flechaAbajo"/>
                    </Scrollchor>
                </div>
                <div className="subseccionNosotros" id="scroll-nosotros">
                    <div className="item iconos">
                        <div className="itemIco">
                            <img src={bateriaMini}
                                 onClick={() => history.push("/baterias")}
                                 alt="bateria"/>
                        </div>
                        <div className="itemIco">
                            <img src={flete}
                                 onClick={() => history.push("/volquetes")}
                                 alt="flete"/>
                        </div>
                        <div className="itemIco">
                            <img src={contacto}
                                 onClick={() => history.push("/contacto")}
                                 alt="contacto"/>
                        </div>
                    </div>
                    <p className="textoNosotros">
                        Somos una empresa dedicada al abastecimiento, prestación de servicios y ventas de
                        baterias
                        con 20 años de trayectoria en el rubro. Apuntamos a dar respuestas, de acuerdo a las
                        necesidades para cada exigencia concreta, colocando recursos frente a cada
                        requerimiento.
                        La empresa está integrada por personas con trayectoria, idoneidad
                        y experiencia, sumada a una permanente capacitación que afianza sus
                        niveles de liderazgo y competitividad.
                    </p>
                </div>
                <div className="carousel">
                    <OwlCarousel ref="owldemo" className="owl-theme itemC" loop
                                 items={4}
                                 margin={10}
                                 autoplay
                                 dots={false}
                                 autoplayTimeout={3000}>
                        <div className="item"><img src={slider1} onClick={(e) => this.resizeImage(e, slider1)}
                                                   alt="slider1"/></div>
                        <div className="item"><img src={slider2} onClick={(e) => this.resizeImage(e, slider2)}
                                                   alt="slider2"/></div>
                        <div className="item"><img src={slider3} onClick={(e) => this.resizeImage(e, slider3)}
                                                   alt="slider3"/></div>
                        <div className="item"><img src={slider4} onClick={(e) => this.resizeImage(e, slider4)}
                                                   alt="slider4"/></div>
                        <div className="item"><img src={slider5} onClick={(e) => this.resizeImage(e, slider5)}
                                                   alt="slider5"/></div>
                        <div className="item"><img src={slider6} onClick={(e) => this.resizeImage(e, slider6)}
                                                   alt="slider6"/></div>
                    </OwlCarousel>
                    <div>
                        <img className="flechaIzq flecha" onClick={() => this.prev()} src={flechaIzq} alt="flecha-izq"/>
                        <img className="flechaDer flecha" onClick={() => this.next()} src={flechaDer}
                             alt="flecha-next"/>
                    </div>
                </div>
                <Footer/>
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

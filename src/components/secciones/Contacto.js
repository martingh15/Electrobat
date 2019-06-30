import React, {Component} from "react";
import {connect} from 'react-redux';
import $ from "jquery";

//CSS
import "../../assets/css/Contacto.css";

//Componentes
import Footer from "../Footer";
import Header from "../Header";

//Images
import flechaAbajo from "../../assets/img/angle-arrow-down.png";
import ubicacion from "../../assets/img/location-pointer.png";
import telefono from "../../assets/img/call-answer.png";
import email from "../../assets/img/envelope.png";
import clock from "../../assets/img/clock.png";
import creditCards from "../../assets/img/credit-cards-payment.png";

class Contacto extends Component {
    constructor(props) {
        super(props);
        this.state = {
            campos: {
                nombre: '',
                email: '',
                mensaje: '',
                empresa: '',
                telefono: '',
                asunto: '',
            },
        };
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    onChangeContacto(e) {
        var campos = this.state.campos;
        campos[e.target.id] = e.target.value;
        this.setState({
            campos: campos,
        });
    }

    submitFormulario(e) {
        e.preventDefault();
        var datos = {
            'nombre': this.state.campos['nombre'],
            'email': this.state.campos['email'],
            'mensaje': this.state.campos['mensaje'],
            'empresa': this.state.campos['empresa'],
            'telefono': this.state.campos['telefono'],
            'asunto': this.state.campos['asunto']
        }
        $.ajax({
            type: "POST",
            url: "sendMail.php",
            data: datos,
            success: function (e) {
                console.log('Mensaje enviado');
            },
            error: function (a) {
                console.log('Hubo un error!');
            }
        });
    }

    render() {
        return (
            <div className="contacto">
                <div className="imagenContacto imagenFondo">
                    <Header/>
                    <p className="textoFondo">CONTACTO</p>
                    <img className="angle-arrow-down" src={flechaAbajo} alt="flechaAbajo"/>
                </div>
                <div className="contenedorColumnas">
                    <div className="columnaDatos">
                        <p className="contacto">CONTACTO</p>
                        <div className="lineaGruesa"></div>
                        <div className="linea">
                            <img src={ubicacion} alt="ubicacion"/>
                            <p>Av. Córdoba 4031, Rosario, Santa Fe</p>
                        </div>
                        <div className="linea">
                            <img className="imgMasChica" src={telefono} alt="telefono"/>
                            <p>(0341) 439 5703 | (0341) 439 6347</p>
                        </div>
                        <div className="linea">
                            <img className="imgMasChica" src={email} alt="email"/>
                            <p>electrobat.baterias@gmail.com</p>
                        </div>
                        <div className="linea">
                            <img className="imgMasChica" src={clock} alt="clock"/>
                            <p>Lunes a Viernes de 08:00 a 12:30 hs y de 15:00 a 19:30 hs.<br/>Sábados de 08:30 a 13:00
                                hs.</p>
                        </div>
                        <div className="linea">
                            <img src={creditCards} alt="creditCards"/>
                            <p>Tarjeta VISA | Master | Naranja | Cabal</p>
                        </div>
                    </div>
                    <div className="columnaFormulario">
                        <form className="forminput" id="forminput" onSubmit={(e) => this.submitFormulario(e)}>
                            <input id="nombre" placeholder="NOMBRE" type="string" required={true}
                                   value={this.state.campos["nombre"]}
                                   onChange={(e) => this.onChangeContacto(e)}/>
                            <input id="empresa" placeholder="EMPRESA" type="string" required={true}
                                   value={this.state.campos["empresa"]}
                                   onChange={(e) => this.onChangeContacto(e)}/>
                            <input id="telefono" placeholder="TELEFONO" type="number" required={true}
                                   value={this.state.campos["telefono"]}
                                   onChange={(e) => this.onChangeContacto(e)}/>
                            <input id="email" placeholder="CORREO" type="email" required={true}
                                   value={this.state.campos["email"]}
                                   onChange={(e) => this.onChangeContacto(e)}/>
                            <input id="asunto" placeholder="ASUNTO (BATERIAS | VOLQUETES)" type="string" required={true}
                                   value={this.state.campos["asunto"]}
                                   onChange={(e) => this.onChangeContacto(e)}/>
                            <textarea id="mensaje" placeholder="MENSAJE" required={true}
                                      value={this.state.campos["mensaje"]}
                                      onChange={(e) => this.onChangeContacto(e)}/>
                            <button>Enviar</button>
                        </form>
                    </div>
                </div>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3348.4402964078263!2d-60.680470685657276!3d-32.93938298092328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b7aca90ca682cb%3A0x691aafc1a36aed83!2sElectrobat!5e0!3m2!1ses!2sar!4v1561856954461!5m2!1ses!2sar"
                    width="100%" height="300" frameBorder="0" style={{border: "0"}} allowFullScreen></iframe>
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
export default connect(mapStateToProps, mapDispatchToProps)(Contacto);

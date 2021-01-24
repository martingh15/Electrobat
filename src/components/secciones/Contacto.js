import React, { Component } from "react";
import { connect } from 'react-redux';
import $ from "jquery";
import Scrollchor from "react-scrollchor";

//CSS
import "../../assets/css/Contacto.css";

//Componentes
import Footer from "../Footer";
import Header from "../Header";
import SEO from "../elementos/SEO";

//Images
import flechaAbajo from "../../assets/img/angle-arrow-down.png";
import creditCards from "../../assets/img/credit-cards-payment2.png";
import ubicacion from "../../assets/img/facebook-placeholder-for-locate-places-on-maps2.png";
import telefono from "../../assets/img/call-answer2.png";
import email from "../../assets/img/envelope2.png";
import clock from "../../assets/img/clock2.png";
import MensajeEmail from "../MensajeEmail";
import ahora12 from "../../assets/img/ahora12.png";

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
                asunto: ''
            },
            show: false,
            correcto: false
        };
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        if (this.props.baterias.byId.consulta && this.props.baterias.byId.consulta.consulta === "detalleBateria") {
            let consulta = this.props.baterias.byId.consulta;
            let campos = this.state.campos;
            campos['asunto'] = "Consulta bateria: " + consulta.bateria.voltios;
            this.setState({
                campos: campos,
            });
        }

        if (this.props.baterias.byId.consulta && this.props.baterias.byId.consulta.consulta === "volquete") {
            let campos = this.state.campos;
            campos['asunto'] = "Consulta alquiler volquete ";
            this.setState({
                campos: campos,
            });
        }
    }

    onChangeContacto(e) {
        let campos = this.state.campos;
        campos[e.target.id] = e.target.value;
        this.setState({
            campos: campos,
        });
    }

    submitFormulario(e) {
        e.preventDefault();
        let datos = {
            'nombre': this.state.campos['nombre'],
            'email': this.state.campos['email'],
            'mensaje': this.state.campos['mensaje'],
            'empresa': this.state.campos['empresa'],
            'telefono': this.state.campos['telefono'],
            'asunto': this.state.campos['asunto']
        };
        $.ajax({
            type: "POST",
            url: "sendMail.php",
            data: datos,
            success: (succes) => {
                this.setState({
                    show: true,
                    correcto: true,
                });
            },
            error: (error) => {
                this.setState({
                    show: true,
                    correcto: false,
                });
            }
        });
    }

    onHide() {
        this.setState({ show: false });
    }

    render() {
		let title = "Contacto - Electrobat";
		let descripcion = "Contáctate para consultar precios de baterias, volquetes y otros servicios.";
        return (
            <div className="contacto">
				<SEO 
					title={title} 
					description={descripcion} 
					url="https://www.electrobatrosario.com/contacto"
					ogImage="https://www.electrobatrosario.com/img/contacto.jpg"
					ogImageAlt={`Contacto Electrobat`}
				/>
                <MensajeEmail
                    key="modal-2"
                    onHide={this.onHide.bind(this)}
                    show={this.state.show} correcto={this.state.correcto} />
                <div className="imagenContacto imagenFondo">
                    <Header />
                    <div className="item"></div>
                    <div className="item" style={{ display: "flex", flexDirection: "column" }}>
                        <p className="textoFondo"><span className="chiquito"></span><span
                            className="grandote">CONTACTO</span></p>
                    </div>
                    <Scrollchor animate={{ duration: 500, offset: 0 }}
                        disableHistory={true}
                        className="item"
                        to="#scroll-contacto">
                        <img className="angle-arrow-down" src={flechaAbajo} alt="flechaAbajo" title="flechaAbajo" />
                    </Scrollchor>
                </div>
                <div className="contenedorColumnas" id="scroll-contacto">
                    <div className="columnaDatos">
                        <p className="textocontacto">CONTACTO</p>
                        <div className="lineaGruesa"></div>
                        <div className="linea">
                            <img src={ubicacion} alt="ubicacion" title="ubicacion" />
                            <p>Av. Córdoba 4031, Rosario, Santa Fe</p>
                        </div>
                        <div className="linea">
                            <img className="imgMasChica" src={telefono} alt="telefono" title="telefono" />
                            <p>(0341) 439 5703 | (0341) 439 6347</p>
                        </div>
                        <div className="linea">
                            <img className="imgMasChica" src={email} alt="email" title="email" />
                            <p>electrobat.baterias@gmail.com</p>
                        </div>
                        <div className="linea">
                            <img className="imgMasChica" src={clock} alt="clock" title="clock" />
                            <p>Lunes a Viernes de 08:00 a 12:30 hs y de 15:00 a 19:30 hs.<br />Sábados de 08:30 a 13:00
                                hs.</p>
                        </div>
                        <div className="linea lineaTarjetas">
                            <img className="creditCards" src={creditCards} alt="creditCards" title="creditCards" />
                            <p className="tarjeta">Tarjeta VISA | Master | Naranja | Cabal</p>
                            <img className="ahora12" src={ahora12} alt="ahora12" title="ahora12" />
                        </div>
                    </div>
                    <div className="columnaFormulario">
                        <form className="forminput" id="forminput" onSubmit={(e) => this.submitFormulario(e)}>
                            <input id="nombre" placeholder="NOMBRE" type="string" required={true}
                                value={this.state.campos["nombre"]}
                                onChange={(e) => this.onChangeContacto(e)} />
                            <input id="empresa" placeholder="EMPRESA" type="string" required={true}
                                value={this.state.campos["empresa"]}
                                onChange={(e) => this.onChangeContacto(e)} />
                            <input id="telefono" placeholder="TELEFONO" type="number" required={true}
                                value={this.state.campos["telefono"]}
                                onChange={(e) => this.onChangeContacto(e)} />
                            <input id="email" placeholder="CORREO" type="email" required={true}
                                value={this.state.campos["email"]}
                                onChange={(e) => this.onChangeContacto(e)} />
                            <input id="asunto" placeholder="ASUNTO" type="string" required={true}
                                value={this.state.campos["asunto"]}
                                onChange={(e) => this.onChangeContacto(e)} />
                            <textarea id="mensaje" placeholder="MENSAJE" required={true}
                                value={this.state.campos["mensaje"]}
                                onChange={(e) => this.onChangeContacto(e)} />
                            <button>Enviar</button>
                        </form>
                    </div>
                </div>
                <iframe
                    title="Google Maps Electrobat"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3348.4402964078263!2d-60.680470685657276!3d-32.93938298092328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b7aca90ca682cb%3A0x691aafc1a36aed83!2sElectrobat!5e0!3m2!1ses!2sar!4v1561856954461!5m2!1ses!2sar"
                    width="100%" height="300" frameBorder="0" style={{ border: "0" }} allowFullScreen></iframe>
                <Footer />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        baterias: state.baterias
    };
}

const mapDispatchToProps = (dispatch) => {
    return {}
};

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(Contacto);

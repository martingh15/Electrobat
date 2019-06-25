import React, {Component} from "react";
import {connect} from 'react-redux';

import $ from "jquery";

import "../assets/css/Contacto.css";

class Contacto extends Component {
    constructor(props) {
        super(props);
        this.state = {
            campos: {
                nombre: 'Martin',
                email: 'martinghiotti@yahoo.com.ar',
                mensaje: 'Anda',
            },
        };
    }

    componentDidMount() {
    }


    componentWillUnmount() {
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
            'mensaje': this.state.campos['mensaje']
        }
        console.log(datos);
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
            <div className="contacto contenedor">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1674.4019427058745!2d-60.73900814935904!3d-32.92977933784726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b652c21d925bc1%3A0x1b62dd461e7b1df3!2sCARPAS+ROSARIO!5e0!3m2!1ses!2sar!4v1561228503593!5m2!1ses!2sar"
                    width="300" height="300" frameBorder="0" style={{border:0}} allowFullScreen></iframe>
                <form className="forminput" onSubmit={(e) => this.submitFormulario(e)}>
                    <input id="nombre" placeholder="Nombre" type="string" required={true}
                           value={this.state.campos["nombre"]}
                           onChange={(e) => this.onChangeContacto(e)}/>
                    <input id="email" placeholder="Email" type="email" required={true}
                           value={this.state.campos["email"]}
                           onChange={(e) => this.onChangeContacto(e)}/>
                    <textarea id="mensaje" placeholder="Consulta..." required={true}
                              value={this.state.campos["mensaje"]}
                              onChange={(e) => this.onChangeContacto(e)}/>
                    <button>Enviar</button>
                </form>
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

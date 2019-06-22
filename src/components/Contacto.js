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

import React, {Component} from 'react';
import {Modal} from "react-bootstrap";

//CSS
import '../assets/css/MensajeEmail.css';

class MensajeEmail extends Component {
    render() {
        this.onHide = this.props.onHide;
        let mensaje = "";
        if (this.props.correcto) {
            mensaje = "El email ya ha sido enviado, muchas gracias por contatarnos!";
        } else {
            mensaje = "Ha ocurrido un error al enviar el email, ante cualquier consulta " +
                "no dude en llamarnos o enviar un mensaje al whatsapp";
        }
        return (
            <div className="contenedorMensajeEmail">
                <Modal show={this.props.show}
                       onHide={this.onHide}
                       dialogClassName="modal-80w"
                       aria-labelledby="example-custom-modal-styling-title">
                    <Modal.Header closeButton>
                        <Modal.Title><b>{this.props.correcto ? "Mensaje enviado." : "Error"}</b></Modal.Title>
                    </Modal.Header>
                    <Modal.Body><p>{mensaje}</p></Modal.Body>
                </Modal>
            </div>
        )
    }
}

export default MensajeEmail;
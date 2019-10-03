import React, {Component} from 'react';
import {Modal} from "react-bootstrap";

//CSS
import '../assets/css/imagenModal.css';

//Images
import cruz from "../assets/img/close.png"

class ImagenModal extends Component {
    render() {
        var clase = this.props.className ? this.props.className : "";
        this.onHide = this.props.onHide;
        return (
            <div className="contenedorImagenModal">
                <Modal
                    show={this.props.show}
                    onHide={this.onHide}
                    dialogClassName="modal-90w"
                    aria-labelledby="example-custom-modal-styling-title"
                >
                    <Modal.Body>
                        <img onClick={() => this.onHide()} className={"imagenModal " + clase}
                             src={process.env.PUBLIC_URL + this.props.imagen} alt="imagenBateria"
                             title="imagenBateria"/>
                    </Modal.Body>
                </Modal>
            </div>
        )
    }
}

export default ImagenModal;
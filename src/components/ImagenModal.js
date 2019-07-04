import React, {Component} from 'react';
import {Modal} from "react-bootstrap";

//CSS
import '../assets/css/imagenModal.css';

//Images
import cruz from "../assets/img/multiply.png"

class ImagenModal extends Component {
    render() {
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
                        <img onClick={() => this.onHide()} className="imagenModal"
                             src={process.env.PUBLIC_URL + this.props.imagen}/>
                    </Modal.Body>
                </Modal>
            </div>
        )
    }
}

export default ImagenModal;
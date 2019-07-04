import React, {Component} from 'react';
import {Modal} from "react-bootstrap";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

//CSS
import '../assets/css/imagenModal.css';

//Images
import cruz from "../assets/img/multiply.png"
import slider1 from "../assets/img/sliders/slider1.jpg";
import slider2 from "../assets/img/sliders/slider2.jpg";
import slider3 from "../assets/img/sliders/slider3.jpg";
import slider4 from "../assets/img/sliders/slider4.jpg";
import slider5 from "../assets/img/sliders/slider5.jpg";
import slider6 from "../assets/img/sliders/slider6.jpg";

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
                        <Carousel>
                            <div>
                                <img src={slider1} />
                                <p className="legend">Legend 1</p>
                            </div>
                            <div>
                                <img src={slider2} />
                                <p className="legend">Legend 2</p>
                            </div>
                            <div>
                                <img src={slider3} />
                                <p className="legend">Legend 3</p>
                            </div>
                        </Carousel>
                    </Modal.Body>
                </Modal>
            </div>
        )
    }
}

export default ImagenModal;
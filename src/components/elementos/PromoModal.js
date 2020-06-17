import React, {Component} from 'react';
import {Modal} from "react-bootstrap";

//CSS
import '../../assets/css/PromoModal.css';

//Images
import imgPromo from "../../assets/img/promo/promo-17-06-2020.png";
import cruz from "../../assets/img/close.png";
import whatsap from "../../assets/img/promo/wsp-promo.png";
import facebook from "../../assets/img/promo/face-promo.png";

class PromoModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: true
        };

        this.wrapperRef = React.createRef();
        this.onHide = this.onHide.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }

    /**
     * Alert if clicked on outside of element
     */
    handleClickOutside(event) {
        if (this.wrapperRef && this.wrapperRef.current && !this.wrapperRef.current.contains(event.target)) {
            this.setState({
                show: false
            });
        }
    }

    onHide() {
        this.setState({
            show: false,
        });
    }

    render() {
        return (
            <Modal
                show={this.state.show}
                onHide={this.onHide}
                dialogClassName="promo-modal"
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Body>
                    <div className="imagenes-modal">
                        <img src={cruz} className="close" onClick={() => this.onHide()} alt="Cruz"/>
                        <img ref={this.wrapperRef} src={imgPromo} className="img-promo" alt="Promo Electrobat"
                         title="Promo Electobat"/>
                        <a href={"https://wa.me/5493416868049"} target="_blank"  rel="noopener noreferrer">
                            <img src={whatsap} className="wsp" alt="Whatsap"/>
                        </a>
                        <a href="https://m.facebook.com/profile.php?id=2455198884548919&changedcover=1" target="_blank"  rel="noopener noreferrer">
                            <img src={facebook} className="facebook" alt="Facebook"/>
                        </a>
                    </div>
                </Modal.Body>
            </Modal>
        )
    }
}

export default PromoModal;
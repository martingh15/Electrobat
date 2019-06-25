import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {Modal, Button} from "react-bootstrap";


//CSS
import '../assets/css/ImagenModal.css';

class ImagenModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

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
                        <img className="imagenModal" src={process.env.PUBLIC_URL + this.props.imagen}/>
                    </Modal.Body>
                </Modal>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {};
}

const mapDispatchToProps = (dispatch) => {
    return {}
};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ImagenModal));
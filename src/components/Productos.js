import React, {Component} from "react";
import {connect} from 'react-redux';
import {Modal, Button} from "react-bootstrap";

//CSS
import "../assets/css/Productos.css";

//Componentes
import ImagenModal from "./ImagenModal";

class Productos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imagen: null,
            show: false,
        };

        this.onHide = this.onHide.bind(this);
    }

    resizeImage(e, img) {
        this.setState({
            imagen: img,
            show: true,
        });
    }

    onHide() {
        this.setState({show: false});
    }

    render() {
        var img1 = process.env.PUBLIC_URL + "/img/1.jpeg";
        var img2 = process.env.PUBLIC_URL + "/img/2.jpeg";
        var img3 = process.env.PUBLIC_URL + "/img/3.jpeg";
        var img4 = process.env.PUBLIC_URL + "/img/4.jpeg";
        var img5 = process.env.PUBLIC_URL + "/img/5.jpeg";
        var img6 = process.env.PUBLIC_URL + "/img/6.jpeg";
        return (
            <div className="contenedorImagenes">
                <div className="imgItem">
                    <img id={1} onClick={(e) => this.resizeImage(e, img1)} src={img1} alt="img1"/>
                </div>
                <div className="imgItem">
                    <img id={2} onClick={(e) => this.resizeImage(e, img2)} src={img2} alt="img2"/>
                </div>
                <div className="imgItem">
                    <img id={3} onClick={(e,) => this.resizeImage(e, img3)} src={img3} alt="img3"/>
                </div>
                <div className="imgItem">
                    <img id={4} onClick={(e) => this.resizeImage(e, img4)} src={img4} alt="img4"/>
                </div>
                <div className="imgItem">
                    <img id={5} onClick={(e) => this.resizeImage(e, img5)} src={img5} alt="img5"/>
                </div>
                <div className="imgItem">
                    <img id={6} onClick={(e) => this.resizeImage(e, img6)} src={img6} alt="img6"/>
                </div>
                <ImagenModal
                    key="modal-1"
                    onHide={this.onHide.bind(this)}
                    show={this.state.show} imagen={this.state.imagen}/>
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
export default connect(mapStateToProps, mapDispatchToProps)(Productos);

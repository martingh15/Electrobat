import React, {Component} from "react";
import {connect} from "react-redux";
//CSS
import "../../assets/css/BateriaDetalle.css";

//Actions
import {receiveBaterias, consultarPrecio} from "../../actions/Actions";

//Components
import Header from "../Header";
import Footer from "../../components/Footer";
import ImagenModal from "../ImagenModal";

//Images
import lupita from "../../assets/img/searcher.png";
import history from "../../history";

class BateriaDetalle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bateria: null,
            imagen: null,
            show: false,
        };

        this.onHide = this.onHide.bind(this);
    }

    componentDidMount() {
        this.props.receiveBaterias();
        window.scrollTo(0, 0);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.baterias != this.props.baterias && this.props.baterias.allIds.length) {
            if (this.props.match.params.idBateria) {
                this.props.baterias.allIds.forEach((idBateria) => {
                    var bateria = this.props.baterias.byId.baterias[idBateria - 1];
                    if (bateria && bateria.id == this.props.match.params.idBateria) {
                        this.setState({bateria: bateria});
                    }
                });
            }
        }
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

    consultarPrecio() {
        this.props.consultarPrecio(this.state.bateria);
        history.push("/contacto");
    }

    render() {
        const {bateria} = this.state;
        var url = "";
        if (bateria) {
            url = process.env.PUBLIC_URL + "/img/" + bateria.imagen;
        }
        return (
            <div className="bateria-detalle">
                <ImagenModal
                    key="modal-1"
                    className="bateriaModal"
                    onHide={this.onHide.bind(this)}
                    show={this.state.show} imagen={this.state.imagen}/>
                <div className="imagenBateriaDetalle imagenFondo">
                    <Header/>
                </div>
                <div className="contenedorBateria">
                    <div className="item contenedorImagen">
                        <div className="cuadradoImagen">
                            <img className="imagenBateria" src={url} alt="imagenBateria" title="imagenBateria"/>
                            <img src={lupita} onClick={(e) => this.resizeImage(e, url)} className="lupita"
                                 alt="lupita" title="lupita"/>
                        </div>
                    </div>
                    <div className="item detallesBateria">
                        <h4><b>Baterias Electrobat</b></h4>
                        <h5><b>{bateria ? bateria.voltios : ""}</b></h5>
                        <h5>{bateria ? bateria.descripcion : ""}</h5>
                        <br/>
                        <p><b>Medidas:</b></p>
                        <p>Largo: {bateria ? bateria.largo : ""}</p>
                        <p>Ancho: {bateria ? bateria.ancho : ""}</p>
                        <p>Alto: {bateria ? bateria.alto : ""}</p>
                        <br/>
                        <div className="consultarPrecio" onClick={() => this.consultarPrecio()}>
                            <p><b>CONSULTAR PRECIO</b></p>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        baterias: state.baterias,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        receiveBaterias: (pedido) => {
            dispatch(receiveBaterias(pedido))
        },
        consultarPrecio: (bateria) => {
            dispatch(consultarPrecio(bateria))
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(BateriaDetalle);

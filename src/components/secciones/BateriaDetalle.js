import React, { Component } from "react";
import { connect } from "react-redux";

//CSS
import "../../assets/css/BateriaDetalle.css";

//Actions
import { receiveBaterias, consultarPrecio } from "../../actions/Actions";

//Components
import Header from "../Header";
import Footer from "../../components/Footer";
import ImagenModal from "../ImagenModal";
import SEO from "../elementos/SEO";

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
        if (prevProps.baterias !== this.props.baterias && this.props.baterias.allIds.length) {
            if (this.props.match.params.idBateria) {
                this.props.baterias.allIds.forEach((idBateria) => {
                    let bateria = this.props.baterias.byId.baterias[idBateria - 1];
                    if (bateria && parseInt(bateria.id) === parseInt(this.props.match.params.idBateria)) {
                        this.setState({ bateria: bateria });
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
        this.setState({ show: false });
    }

    consultarPrecio() {
        this.props.consultarPrecio(this.state.bateria);
        history.push("/contacto");
    }

    render() {
        const { bateria } = this.state;
        let url = "";
        if (bateria) {
            url = process.env.PUBLIC_URL + "/img/" + bateria.imagen;
        }
        let tituloBateria = bateria ? bateria.voltios : "";
        let title		  = `Detalle de bateria ${tituloBateria} - Electrobat.`;
		let descripcion	  = `Venta de baterias: ${title}.`;
        return (
            <div className="bateria-detalle">
				<SEO 
					title={title} 
					description={descripcion} 
					url={window.location.href}
					ogImage="https://www.electrobatrosario.com/img/baterias.jpg"
					ogImageAlt={`Batería: ${tituloBateria}`}
				/>
                <ImagenModal
                    key="modal-1"
                    className="bateriaModal"
                    onHide={this.onHide.bind(this)}
                    show={this.state.show} imagen={this.state.imagen} />
                <div className="imagenBateriaDetalle imagenFondo">
                    <Header />
                </div>
                <article className="contenedorBateria">
                    <div className="item contenedorImagen">
                        <div className="cuadradoImagen">
                            <img className="imagenBateria" src={url} alt="imagenBateria" title="imagenBateria" />
                            <img src={lupita} onClick={(e) => this.resizeImage(e, url)} className="lupita"
                                alt="lupita" title="lupita" />
                        </div>
                    </div>
                    <div className="item detallesBateria">
                        <h1 className="titulo1"><b>Baterias Electrobat</b></h1>
                        <h2 className="titulo2"><b>{bateria ? bateria.voltios : ""}</b></h2>
                        <h3 className="titulo3">{bateria ? bateria.descripcion : ""}</h3>
                        <br />
                        <p><b>Medidas:</b></p>
                        <p>Largo: {bateria ? bateria.largo : ""}</p>
                        <p>Ancho: {bateria ? bateria.ancho : ""}</p>
                        <p>Alto: {bateria ? bateria.alto : ""}</p>
                        <br />
                        <div className="consultarPrecio" onClick={() => this.consultarPrecio()}>
                            <button><b>CONSULTAR PRECIO</b></button>
                        </div>
                    </div>
                </article>
                <Footer />
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

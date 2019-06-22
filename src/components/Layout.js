import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Route, withRouter} from 'react-router-dom';

//Router
import {Switch} from 'react-router';

//Componentes
import Navegador from "./Navegador";
import Inicio from "./Inicio";
import Productos from "./Productos";
import Servicios from "./Servicios";
import Contacto from "./Contacto";
import NotFound from "./NotFound";

class Layout extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className="app">
                <Navegador/>
                <Switch>
                    <Route path="/" exact component={Inicio}/>
                    <Route path="/productos" component={Productos}/>
                    <Route path="/servicios" component={Servicios}/>
                    <Route path="/contacto" component={Contacto}/>
                    {/*<Route path="*" component={NotFound}/>*/}
                </Switch>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
    };
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Layout));

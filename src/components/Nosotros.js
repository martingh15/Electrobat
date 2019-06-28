import React, {Component} from "react";
import {connect} from 'react-redux';
import Header from "./Header";

//CSS
import "../assets/css/Nosotros.css";

class Nosotros extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div className="nosotros">
                <Header/>
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

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps,mapDispatchToProps)(Nosotros);

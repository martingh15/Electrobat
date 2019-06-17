import React, {Component} from "react";
import {connect} from 'react-redux';

class Servicios extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount() {
    }


    componentWillUnmount() {
    }

    render() {
        return (
            <div>
                <h1>Servicios</h1>
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
export default connect(mapStateToProps,mapDispatchToProps)(Servicios);

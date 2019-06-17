import React, {Component} from "react";
import {connect} from 'react-redux';
import history from "../history";

class NotFound extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        setTimeout(() => {
            history.push("/");
        }, 3000);
    }


    componentWillUnmount() {
    }

    render() {
        return (
            <div>
                <h1>Página no encontrada, se redigirirá en unos instantes</h1>
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
export default connect(mapStateToProps,mapDispatchToProps)(NotFound);

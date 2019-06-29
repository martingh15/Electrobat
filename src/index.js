// Import all the third party stuff
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';


//import registerServiceWorker from './registerServiceWorker';

//Router
import {Switch} from 'react-router';
import {Router, Route} from 'react-router-dom'
import history from './history';

//Redux
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import appReducers from './reducers/index';
import {createLogger} from 'redux-logger';
import {Provider} from 'react-redux';


// Import the CSS file, which webpack transfers to the build folder
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/css/bootstrap-theme.css';
import './assets/css/index.css';

// Import the components used as pages

import Layout from "./components/Layout";
window.$ = window.jQuery = require("jquery");

// Creates the Redux reducers with the redux-thunk middleware, which allows us
// to do asynchronous things in the actions
var createStoreWithMiddleware = null;
if (process.env.NODE_ENV !== 'production') {
    const loggerMiddleware = createLogger();
    createStoreWithMiddleware = applyMiddleware(thunk, loggerMiddleware)(createStore);
    console.log("hola estoy en debug");
}
else{
    console.log("hola estoy en produccion");
    createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

    //chau console.los metodo 4 de esta pagina https://stapp.space/how-to-remove-javascript-console-log-pros-2/
    // (function () {
    //     var method;
    //     var noop = function noop() { };
    //     var methods = [
    //         'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
    //         'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
    //         'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
    //         'timeStamp', 'trace', 'warn'
    //     ];
    //     var length = methods.length;
    //     var console = (window.console = window.console || {});
    //
    //     while (length--) {
    //         method = methods[length];
    //         console[method] = noop;
    //     }
    // }());
}

const store = createStoreWithMiddleware(appReducers);
ReactDOM.render(
    <Provider store={store}>
        <Router history={history} basename={"/martin-test/"}>
            <Switch>
                <Route path="/" component={Layout}/>
            </Switch>
        </Router>
    </Provider>,
    document.getElementById('root')
);


// registerServiceWorker();

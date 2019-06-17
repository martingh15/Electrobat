import {
    INVALIDATE_IMAGENES,
    REQUEST_IMAGENES, RECEIVE_IMAGENES, ERROR_IMAGENES
} from '../actions/ImagenesAction';
import { combineReducers } from 'redux';

function imagenesById(state = {
    isFetching: false,
    didInvalidate: true,
    imagenes: []
}, action) {
    switch (action.type) {
        case INVALIDATE_IMAGENES:
            return Object.assign({}, state, {
                didInvalidate: true
            });
        case REQUEST_IMAGENES:
            return Object.assign({}, state, {
                isFetching: true,
                didInvalidate: false
            });
        case RECEIVE_IMAGENES:
            return Object.assign({}, state, {
                isFetching: false,
                didInvalidate: false,
                imagenes: action.imagenes,
                lastUpdated: action.receivedAt
            });
        case ERROR_IMAGENES:
            return Object.assign({}, state, {
                isFetching: false,
                didInvalidate: true,
                error: action.error
            });
        default:
            return state
    }
}


function allImagenes(state = [], action) {
    switch (action.type) {
        case RECEIVE_IMAGENES:
            return action.imagenes;
        default:
            return state
    }
}


const imagenes = combineReducers({
    byId : imagenesById,
    allIds : allImagenes
});

export default imagenes;
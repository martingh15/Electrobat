import {
    RECEIVE_BATERIAS,
    CONSULTAR_PRECIO
} from '../actions/Actions';
import { combineReducers } from 'redux';

function bateriasById(state = {
    baterias: [],
    consulta: {},
}, action) {
    switch (action.type) {
        case RECEIVE_BATERIAS:
            return Object.assign({}, state, {
                baterias: action.baterias,
                lastUpdated: action.receivedAt
            });
        case CONSULTAR_PRECIO:
            return Object.assign({}, state, {
                consulta: action.consulta,
                lastUpdated: action.receivedAt
            });
        default:
            return state
    }
}


function allBaterias(state = [], action) {
    switch (action.type) {
        case RECEIVE_BATERIAS:
            return [1,2,3,4,5,6,7,8,9,10,11];
        default:
            return state
    }
}


const baterias = combineReducers({
    byId : bateriasById,
    allIds : allBaterias
});

export default baterias;
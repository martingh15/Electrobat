import {
    RECEIVE_BATERIAS
} from '../actions/BateriaAction';
import { combineReducers } from 'redux';

function bateriasById(state = {
    isFetching: false,
    didInvalidate: true,
    baterias: []
}, action) {
    switch (action.type) {
        case RECEIVE_BATERIAS:
            return Object.assign({}, state, {
                isFetching: false,
                didInvalidate: false,
                baterias: action.baterias,
                lastUpdated: action.receivedAt
            });
        default:
            return state
    }
}


function allBaterias(state = [], action) {
    switch (action.type) {
        case RECEIVE_BATERIAS:
            return [1,2,3,4,5,6];
        default:
            return state
    }
}


const baterias = combineReducers({
    byId : bateriasById,
    allIds : allBaterias
});

export default baterias;
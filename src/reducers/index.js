import { combineReducers } from 'redux';
import baterias from './baterias';

const appReducers = combineReducers({
    baterias,
});

export default appReducers;
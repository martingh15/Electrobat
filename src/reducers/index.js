import { combineReducers } from 'redux';
import imagenes from './imagenes';

const appReducers = combineReducers({
    imagenes,
});

export default appReducers;
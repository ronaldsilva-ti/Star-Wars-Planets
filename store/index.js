import { combineReducers, createStore, applyMiddleware,compose } from 'redux';
import thunk from 'redux-thunk';

import detailsPlanet from './detailsPlanet'

const rootReducer = combineReducers({
    detailsPlanet
})

export default createStore(rootReducer, compose(applyMiddleware(thunk)));
import {createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";
import promiseMiddleware from 'redux-promise';

import Reducers from './reducers';

const applicationInitialState = {
    user: []
}

export function initializeStore (initialState = applicationInitialState) {
    return createStore(
        Reducers,
        initialState,
        composeWithDevTools(applyMiddleware(promiseMiddleware))
    );
}

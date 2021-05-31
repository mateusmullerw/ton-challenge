import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createReducer } from './reducers';

export const configureStore = (initialState = {}) => {
    const middlewares = [
        thunk,
    ];

    const store = createStore(
        createReducer(),
        initialState,
        applyMiddleware(...middlewares),
    );

    return store;
};

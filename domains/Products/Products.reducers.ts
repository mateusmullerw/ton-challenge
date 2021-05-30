import { combineReducers } from 'redux';
import { LOAD_STATE } from '../../redux/constants';
import { ActionType } from '../../redux/types';

export const UPDATE_PRODUCT_DETAILS = 'UPDATE_PRODUCT_DETAILS';
export const PRODUCT_UPDATED = 'PRODUCT_UPDATED';
export const FETCH_PRODUCT_REQUEST_CALLED = 'FETCH_PRODUCT_REQUEST_CALLED';
export const FETCH_PRODUCT_REQUEST_SUCCEEDED = 'FETCH_PRODUCT_REQUEST_SUCCEEDED';
export const FETCH_PRODUCT_REQUEST_FAILED = 'FETCH_PRODUCT_REQUEST_FAILED';
export const FETCH_SEARCH_REQUEST_CALLED = 'FETCH_SEARCH_REQUEST_CALLED';
export const FETCH_SEARCH_REQUEST_SUCCEEDED = 'FETCH_SEARCH_REQUEST_SUCCEEDED';
export const FETCH_SEARCH_REQUEST_FAILED = 'FETCH_SEARCH_REQUEST_FAILED';

const productListInitialState = {
    loadState: LOAD_STATE.LOADING,
    data: {},
    error: null,
};
const productDetailsInitialState = {
    loadState: LOAD_STATE.LOADING,
    data: {},
    error: null,
    lastUpdate: '',
};

const productListsReducer = (state = productListInitialState, action: ActionType) => {
    switch (action.type) {
    case FETCH_SEARCH_REQUEST_CALLED:
        return { ...state, loadState: LOAD_STATE.LOADING };
    case FETCH_SEARCH_REQUEST_SUCCEEDED:
        return { ...state, loadState: LOAD_STATE.SUCCESS, data: action.payload };
    case FETCH_SEARCH_REQUEST_FAILED:
        return { ...state, loadState: LOAD_STATE.FAIL, error: action.payload };
    default:
        return state;
    }
};

const productDetailsReducer = (state = productDetailsInitialState, action: ActionType) => {
    switch (action.type) {
    case UPDATE_PRODUCT_DETAILS:
        return {
            ...state,
            data: { ...state.data, ...action.payload },
        };
    case PRODUCT_UPDATED:
        return {
            ...state,
            lastUpdate: action.payload,
        };
    case FETCH_PRODUCT_REQUEST_CALLED:
        return { ...state, loadState: LOAD_STATE.LOADING };
    case FETCH_PRODUCT_REQUEST_SUCCEEDED:
        return {
            ...state,
            loadState: LOAD_STATE.SUCCESS,
            data: { ...state.data, ...action.payload },
        };
    case FETCH_PRODUCT_REQUEST_FAILED:
        return { ...state, loadState: LOAD_STATE.FAIL, error: action.payload };
    default:
        return state;
    }
};

export const productsReducer = combineReducers({
    productList: productListsReducer,
    productsDetails: productDetailsReducer,
});

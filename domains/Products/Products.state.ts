import { Dispatch } from 'redux';
import { ActionType } from '../../redux/types';
import { State, ProductListInterface, ProductsDetailsInterface } from './Products.types';
import { makeResquest } from '../../network/fetch';
import {
    FETCH_PRODUCT_REQUEST_CALLED,
    FETCH_PRODUCT_REQUEST_SUCCEEDED,
    FETCH_PRODUCT_REQUEST_FAILED,
    FETCH_SEARCH_REQUEST_CALLED,
    FETCH_SEARCH_REQUEST_SUCCEEDED,
    FETCH_SEARCH_REQUEST_FAILED,
} from './Products.reducers';

export const getProductList = (state: State) => state.products.productList.data;
export const getProductListLoadState = (state: State) => state.products.productList.loadState;
export const getProductsDetails = (state: State) => state.products.productsDetails.data;
export const getProductLoadState = (state: State) => state.products.productsDetails.loadState;

const searchURL = 'https://collectionapi.metmuseum.org/public/collection/v1/search?q=illustration&hasImages=1';
const productDetailURL = 'https://collectionapi.metmuseum.org/public/collection/v1/objects/';

export const fetchSearch = () => (dispatch: Dispatch<ActionType>) => {
    dispatch(fetchSearchCalled());

    makeResquest(searchURL)
        .then((data) => dispatch(fetchSearchSucceeded(data)))
        .catch((error) => dispatch(fetchSearchFailed(error)));
};

export const fetchProduct = (id: number) => (
    dispatch: Dispatch<ActionType>,
) => {
    dispatch(fetchProductCalled());
    const completeURL = productDetailURL + id;
    makeResquest(completeURL)
        .then((data) => {
            const product = { [id]: data };
            return dispatch(fetchProductSucceeded(product));
        })
        .catch((error) => dispatch(fetchProductFailed(error)));
};

export const fetchSearchCalled = () => ({
    type: FETCH_SEARCH_REQUEST_CALLED,
});
export const fetchSearchSucceeded = (response: ProductListInterface) => ({
    type: FETCH_SEARCH_REQUEST_SUCCEEDED,
    payload: response,
});
export const fetchSearchFailed = (error: {}) => ({
    type: FETCH_SEARCH_REQUEST_FAILED,
    payload: error,
});

export const fetchProductCalled = () => ({
    type: FETCH_PRODUCT_REQUEST_CALLED,
});
export const fetchProductSucceeded = (response: ProductsDetailsInterface) => ({
    type: FETCH_PRODUCT_REQUEST_SUCCEEDED,
    payload: response,
});
export const fetchProductFailed = (error: {}) => ({
    type: FETCH_PRODUCT_REQUEST_FAILED,
    payload: error,
});

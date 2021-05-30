import { Dispatch } from 'redux';
import { ActionType } from '../../redux/types';
import {
    State, ProductListInterface, ProductsDetailsInterface, ProductData, ProductItemInterface,
} from './Products.types';
import { makeResquest } from '../../network/fetch';
import {
    UPDATE_PRODUCT_DETAILS,
    PRODUCT_UPDATED,
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
export const getProductUpdated = (state: State) => state.products.productsDetails.lastUpdate;

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
    getState: Function,
) => {
    dispatch(fetchProductCalled());
    const state = getState();
    const products = getProductsDetails(state);
    const productNotInState = !Object.prototype.hasOwnProperty.call(products, id);

    if (productNotInState) {
        const completeURL = productDetailURL + id;
        makeResquest(completeURL)
            .then((data: ProductData) => {
                const product = {
                    [id]: { data, key: data.accessionNumber, isAddedToCart: false },
                };
                return dispatch(fetchProductSucceeded(product));
            })
            .catch((error) => dispatch(fetchProductFailed(error)));
    }
};

export const updateProductDetails = (id: number, fieldsToUpdate:Partial<ProductItemInterface>) => (
    dispatch: Dispatch<ActionType>,
    getState: Function,
) => {
    const state = getState();
    const oldProduct = getProductsDetails(state)[id];
    const updatedProduct = { ...oldProduct, ...fieldsToUpdate };
    const product = { [id]: updatedProduct };

    dispatch(updateProduct(product));

    const timestamp = (new Date()).toString();
    dispatch(productUpdated(timestamp));
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

export const updateProduct = (product: ProductsDetailsInterface) => ({
    type: UPDATE_PRODUCT_DETAILS,
    payload: product,
});
export const productUpdated = (timestamp: string) => ({
    type: PRODUCT_UPDATED,
    payload: timestamp,
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

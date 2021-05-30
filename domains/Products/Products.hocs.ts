import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
    getProductList,
    getProductsDetails,
    getProductUpdated,
    getProductListLoadState,
    getProductLoadState,
    fetchSearch,
    fetchProduct,
} from './Products.state';
import {
    State, ProductListInterface, ProductsDetailsInterface,
} from './Products.types';

export interface WithProductsProps{
    productList: ProductListInterface;
    productListLoadState: string;
    productsDetails: ProductsDetailsInterface;
    productsDetailsLoadState: string;
    detailsUpdated: string;
    fetchProductList: Function;
    fetchProductDetails: Function;
}

export const withProducts = connect(
    (state: State) => ({
        productList: getProductList(state),
        productListLoadState: getProductListLoadState(state),
        productsDetails: getProductsDetails(state),
        productsDetailsLoadState: getProductLoadState(state),
        detailsUpdated: getProductUpdated(state),
    }),
    (dispatch) => bindActionCreators({
        fetchProductList: fetchSearch,
        fetchProductDetails: fetchProduct,
    }, dispatch),
);

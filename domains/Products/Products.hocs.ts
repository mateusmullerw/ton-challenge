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
    getSearchTerm,
    clearProductDetails,
} from './Products.state';
import {
    State, ProductListInterface, ProductsDetailsType,
} from './Products.types';

export interface WithProductsProps{
    productList: ProductListInterface;
    productListLoadState: string;
    productsDetails: ProductsDetailsType;
    productsDetailsLoadState: string;
    detailsUpdated: string;
    fetchProductList: Function;
    fetchProductDetails: Function;
    searchTerm: string;
    clearProductDetails: Function;
}

export const withProducts = connect(
    (state: State) => ({
        productList: getProductList(state),
        productListLoadState: getProductListLoadState(state),
        productsDetails: getProductsDetails(state),
        productsDetailsLoadState: getProductLoadState(state),
        detailsUpdated: getProductUpdated(state),
        searchTerm: getSearchTerm(state),
    }),
    (dispatch) => bindActionCreators({
        fetchProductList: fetchSearch,
        fetchProductDetails: fetchProduct,
        clearProductDetails,
    }, dispatch),
);

import { combineReducers } from 'redux';
import { productsReducer } from '../domains/Products/Products.reducers';
import { cartReducer } from '../domains/Cart/Cart.reducers';

export const createReducer = () => combineReducers({
    products: productsReducer,
    cart: cartReducer,
});

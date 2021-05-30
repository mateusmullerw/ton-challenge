import { Dispatch } from 'redux';
import { ActionType } from '../../redux/types';
import {
    ADD_ITEM_TO_CART,
    REMOVE_ITEM_FROM_CART,
    OPEN_CART_NOTIFICATION,
    CLOSE_CART_NOTIFICATION,
} from './Cart.reducers';
import { CartItemType, State } from './Cart.types';

export const getCartItems = (state: State) => state.cart.items;
export const isCartNotificationOpen = (state: State) => state.cart.isNotificationOpen;

export const addToCart = (item: CartItemType) => (dispatch: Dispatch<ActionType>) => {
    dispatch(addItemToCart(item));
    dispatch(openCartNotification());
    setTimeout(() => { dispatch(closeCartNotification()); }, 5000);
};
export const removeFromCart = (item: CartItemType) => (dispatch: Dispatch<ActionType>) => {
    dispatch(removeItemFromCart(item));
};

export const addItemToCart = (item: CartItemType) => ({
    type: ADD_ITEM_TO_CART,
    payload: item,
});
export const removeItemFromCart = (item: CartItemType) => ({
    type: REMOVE_ITEM_FROM_CART,
    payload: item,
});
export const openCartNotification = () => ({
    type: OPEN_CART_NOTIFICATION,
});
export const closeCartNotification = () => ({
    type: CLOSE_CART_NOTIFICATION,
});

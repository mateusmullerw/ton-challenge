import { ThunkDispatch } from 'redux-thunk';
import { ActionType } from '../../redux/types';
import {
    ADD_ITEM_TO_CART,
    REMOVE_ITEM_FROM_CART,
    OPEN_CART_NOTIFICATION,
    CLOSE_CART_NOTIFICATION,
} from './Cart.reducers';
import { CartItemType, State } from './Cart.types';
import { updateProductDetails } from '../Products/Products.state';

export const getCartItems = (state: State) => state.cart.items;
export const isCartNotificationOpen = (state: State) => state.cart.isNotificationOpen;

export const addToCart = (item: CartItemType) => (
    dispatch: ThunkDispatch<{}, void, ActionType>,
) => {
    dispatch(addItemToCart(item));

    dispatch(updateProductDetails(item.id, { isAddedToCart: true }));
};

export const removeFromCart = (item: CartItemType) => (
    dispatch: ThunkDispatch<{}, void, ActionType>,
) => {
    dispatch(removeItemFromCart(item.id));

    dispatch(updateProductDetails(item.id, { isAddedToCart: false }));
};

export const addItemToCart = (item: CartItemType) => ({
    type: ADD_ITEM_TO_CART,
    payload: item,
});
export const removeItemFromCart = (id: number) => ({
    type: REMOVE_ITEM_FROM_CART,
    payload: id,
});
export const openCartNotification = () => ({
    type: OPEN_CART_NOTIFICATION,
});
export const closeCartNotification = () => ({
    type: CLOSE_CART_NOTIFICATION,
});

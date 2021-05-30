import { ActionType } from '../../redux/types';

export const ADD_ITEM_TO_CART = 'ADD_ITEM_TO_CART';
export const REMOVE_ITEM_FROM_CART = 'REMOVE_ITEM_FROM_CART';
export const OPEN_CART_NOTIFICATION = 'OPEN_CART_NOTIFICATION';
export const CLOSE_CART_NOTIFICATION = 'CLOSE_CART_NOTIFICATION';

const cartInitialState = {
    items: [],
    isNotificationOpen: false,
};

export const cartReducer = (state = cartInitialState, action: ActionType) => {
    switch (action.type) {
    case ADD_ITEM_TO_CART:
        return {
            ...state,
            items: [...state.items, action.payload],
        };
    case REMOVE_ITEM_FROM_CART:
        return {
            ...state,
            items: state.items.filter((item) => item !== action.payload),
        };
    case OPEN_CART_NOTIFICATION:
        return { ...state, isNotificationOpen: true };
    case CLOSE_CART_NOTIFICATION:
        return { ...state, isNotificationOpen: false };
    default:
        return state;
    }
};

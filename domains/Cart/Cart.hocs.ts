import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
    getCartItems,
    isCartNotificationOpen,
    addToCart,
    removeFromCart,

} from './Cart.state';
import {
    CartItemType, DataInterface, State,
} from './Cart.types';

export interface WithCartProps{
    state: DataInterface;
    cartItems: CartItemType[];
    isCartNotificationOpen: boolean;
    addToCart: Function;
    removeFromCart: Function;
}

export const withCart = connect(
    (state: State) => ({
        state: state.cart,
        cartItems: getCartItems(state),
        isCartNotificationOpen: isCartNotificationOpen(state),
    }),
    (dispatch) => bindActionCreators({
        addToCart,
        removeFromCart,
    }, dispatch),
);

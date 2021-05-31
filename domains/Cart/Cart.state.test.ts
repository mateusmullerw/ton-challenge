import configureMockStore from 'redux-mock-store';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { ActionType } from '../../redux/types';
import * as action from './Cart.state';
import { initialState } from '../../redux/constants';
import {
    ADD_ITEM_TO_CART,
    REMOVE_ITEM_FROM_CART,
} from './Cart.reducers';
import { UPDATE_PRODUCT_DETAILS, PRODUCT_UPDATED } from '../Products/Products.reducers';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const mockDate = new Date();
jest.spyOn(global, 'Date')
    .mockImplementation(() => mockDate as unknown as string);

describe('Test Cart state', () => {
    it('expect related actions to be dispached when addItemToCart is called', () => {
        const item = {
            id: 3,
            quantity: 1,
        };
        const itemDetails = initialState.products.productsDetails.data.get(item.id);
        const updatedProduct = { ...itemDetails, isAddedToCart: true };
        const product = { key: item.id, value: updatedProduct };

        const expectedActions = [
            { type: ADD_ITEM_TO_CART, payload: item },
            {
                type: UPDATE_PRODUCT_DETAILS,
                payload: product,
            },
            { type: PRODUCT_UPDATED, payload: mockDate.getTime().toString() },
        ];

        const store = mockStore(initialState);
        const thunkDispach: ThunkDispatch<{}, void, ActionType> = store.dispatch;
        thunkDispach(action.addToCart(item));

        const actualActions = store.getActions();

        expect(actualActions).toEqual(expectedActions);
    });

    it('expect related actions to be dispached when removeItemFromCart is called', () => {
        const item = {
            id: 1,
            quantity: 1,
        };

        const itemDetails = initialState.products.productsDetails.data.get(item.id);
        const updatedProduct = { ...itemDetails, isAddedToCart: false };
        const product = { key: item.id, value: updatedProduct };

        const expectedActions = [
            { type: REMOVE_ITEM_FROM_CART, payload: item.id },
            {
                type: UPDATE_PRODUCT_DETAILS,
                payload: product,
            },
            { type: PRODUCT_UPDATED, payload: mockDate.getTime().toString() },
        ];

        const store = mockStore(initialState);
        const thunkDispach: ThunkDispatch<{}, void, ActionType> = store.dispatch;

        thunkDispach(action.removeFromCart(item));

        const actualActions = store.getActions();
        expect(actualActions).toEqual(expectedActions);
    });
});

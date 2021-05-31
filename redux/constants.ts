import { ProductDetailsInterface } from '../domains/Products/Products.types';

export const LOAD_STATE = {
    LOADING: 'loading',
    FAIL: 'fail',
    SUCCESS: 'success',
    CANCELED: 'canceled',
};

const initialProducts = [
    {
        data: { objectID: 1 },
        key: 'one',
        isAddedToCart: true,
    },
    {
        data: { objectID: 2 },
        key: 'two',
        isAddedToCart: true,
    },
    {
        data: { objectID: 3 },
        key: 'three',
        isAddedToCart: false,
    },
    {
        data: { objectID: 4 },
        key: 'four',
        isAddedToCart: false,
    },
    {
        data: { objectID: 5 },
        key: 'five',
        isAddedToCart: false,
    },
];

const productsDataMap = new Map<number, ProductDetailsInterface>();

initialProducts.forEach((product) => {
    productsDataMap.set(product.data.objectID, product);
});

export const initialState = {
    products: {
        productList: {
            loadState: LOAD_STATE.LOADING,
            data: {
                total: 5,
                objectIDs: [1, 2, 3, 4, 5],
            },
            error: null,
        },
        productsDetails: {
            loadState: LOAD_STATE.LOADING,
            data: productsDataMap,
            error: null,
            lastUpdate: '',
        },
    },
    cart: {
        items: [
            {
                id: 1,
                quantity: 1,
            },
            {
                id: 2,
                quantity: 1,
            },
        ],
        isNotificationOpen: false,
    },

};

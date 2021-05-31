import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import '@testing-library/jest-dom';
import { ProductItem, texts } from './ProductItem';
import { ColorSchemeType } from '../constants/Colors';

const addToCart = jest.fn();
const removeFromCart = jest.fn();

const item = {
    data: {
        objectID: 1,
        title: 'title',
    },
    key: 'key',
    colorScheme: 'dark' as ColorSchemeType,
    isAddedToCart: false,
    addToCart,
    removeFromCart,
};

describe('Test ProductItem', () => {
    it('expect addToCart action to be called when button is pressed and item not in cart', () => {
        const { getByText } = render(
            <ProductItem item={item} />,

        );
        const button = getByText(texts.add);
        fireEvent.press(button);

        expect(addToCart).toBeCalled();
    });

    it('expect removeFromCart action to be called when button is pressed and item is in cart', () => {
        const { getByText } = render(
            <ProductItem item={{ ...item, isAddedToCart: true }} />,

        );
        const button = getByText(texts.remove);
        fireEvent.press(button);

        expect(removeFromCart).toBeCalled();
    });
});

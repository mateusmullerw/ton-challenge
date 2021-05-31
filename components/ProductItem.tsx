import React from 'react';
import { Image, View } from 'react-native';
import { styles } from './ProductItem.styles';
import { Text, Button } from './Themed';
import { ProductItemInterface } from '../domains/Products/Products.types';
import { ensureTextMaxLength } from './utils';
import Colors from '../constants/Colors';

interface ProductItemProps {
    item: ProductItemInterface
}

export const texts = {
    add: 'Add to cart',
    remove: 'Remove from cart',
};

export const ProductItem = ({
    item,
}: ProductItemProps) => {
    const {
        data,
        isAddedToCart,
        colorScheme,
        addToCart,
        removeFromCart,
    } = item;
    const isAdd = !isAddedToCart;

    const title = ensureTextMaxLength(data.title, 30);
    const buttonText = isAdd ? texts.add : texts.remove;
    const backgroundColorName = isAdd ? 'add' : 'delete';
    const backgroundColor = Colors[colorScheme].card;

    const handleOnPress = () => {
        const itemToUpdate = {
            id: data.objectID,
            quantity: 1,
        };

        return isAdd
            ? addToCart(itemToUpdate)
            : removeFromCart(itemToUpdate);
    };

    return (
        <View style={{ ...styles.container, backgroundColor }}>
            <Image
                style={styles.image}
                source={{ uri: data.primaryImageSmall }}
            />
            <View style={styles.textContainer}>
                <Text style={styles.text}>{title}</Text>
            </View>
            <View style={styles.buttonContainer}>
                <Button
                    onPress={handleOnPress}
                    title={buttonText}
                    backgroundColorName={backgroundColorName}
                />
            </View>
        </View>
    );
};

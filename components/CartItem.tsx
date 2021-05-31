import React from 'react';
import { Image, View } from 'react-native';
import { styles } from './CartItem.styles';
import { Text } from './Themed';
import { ProductItemInterface } from '../domains/Products/Products.types';
import { IconButton } from './IconButton';
import { ensureTextMaxLength } from './utils';
import Colors from '../constants/Colors';

interface CartItemProps {
    item: ProductItemInterface
}

export const CartItem = ({
    item,
}:CartItemProps) => {
    const {
        data,
        colorScheme,
        removeFromCart,
    } = item;

    const backgroundColor = Colors[colorScheme].card;

    const handleRemoveFromCart = () => {
        const itemToAdd = {
            id: data.objectID,
            quantity: 1,
        };
        removeFromCart(itemToAdd);
    };

    const title = ensureTextMaxLength(data.title, 45);

    return (
        <View style={{ ...styles.container, backgroundColor }}>
            <Image
                style={styles.image}
                source={{ uri: data.primaryImageSmall }}
            />
            <View style={{ ...styles.textContainer, backgroundColor }}>
                <Text style={styles.text}>{title}</Text>
            </View>
            <View style={{ ...styles.buttonContainer, backgroundColor }}>
                <IconButton
                    onPress={handleRemoveFromCart}
                    iconName="close-circle-outline"
                    colorName="delete"
                />
            </View>
        </View>
    );
};

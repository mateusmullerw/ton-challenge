import React from 'react';
import { Image } from 'react-native';
import { styles } from './CartItem.styles';
import { Text, View } from './Themed';
import { ProductItemInterface } from '../domains/Products/Products.types';
import { IconButton } from './IconButton';
import { ensureTextMaxLength } from './utils';

interface CartItemProps {
    item: ProductItemInterface
}

export const CartItem = ({
    item,
}:CartItemProps) => {
    const handleRemoveFromCart = () => {
        const itemToAdd = {
            id: item.data.objectID,
            quantity: 1,
        };
        item.removeFromCart(itemToAdd);
    };

    const title = ensureTextMaxLength(item.data.title, 45);

    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={{ uri: item.data.primaryImageSmall }}
            />
            <View style={styles.textContainer}>
                <Text style={styles.text}>{title}</Text>
            </View>
            <View style={styles.buttonContainer}>
                <IconButton
                    onPress={handleRemoveFromCart}
                    iconName="close-circle-outline"
                    colorName="delete"
                />
            </View>
        </View>
    );
};

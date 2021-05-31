import React from 'react';
import { Image } from 'react-native';
import { styles } from './ProductItem.styles';
import { Text, Button, View } from './Themed';
import { ProductItemInterface } from '../domains/Products/Products.types';
import { ensureTextMaxLength } from './utils';

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
    const isAdd = !item.isAddedToCart;

    const title = ensureTextMaxLength(item.data.title, 30);
    const buttonText = isAdd ? texts.add : texts.remove;
    const backgroundColorName = isAdd ? undefined : 'delete';

    const handleOnPress = () => {
        const itemToUpdate = {
            id: item.data.objectID,
            quantity: 1,
        };

        return isAdd
            ? item.addToCart(itemToUpdate)
            : item.removeFromCart(itemToUpdate);
    };

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
                <Button
                    onPress={handleOnPress}
                    title={buttonText}
                    backgroundColorName={backgroundColorName}
                />
            </View>
        </View>
    );
};

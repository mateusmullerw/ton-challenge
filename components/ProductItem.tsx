import React from 'react';
import { Image } from 'react-native';
import { styles } from './ProductItem.styles';
import { Text, Button, View } from './Themed';
import { ProductItemInterface } from '../domains/Products/Products.types';
import { ensureTextMaxLength } from './utils';

interface ProductItemProps {
    item: ProductItemInterface
}

export const ProductItem = ({
    item,
}: ProductItemProps) => {
    const handleAddToCart = () => {
        const itemToAdd = {
            id: item.data.objectID,
            quantity: 1,
        };
        item.addToCart(itemToAdd);
    };
    const handleRemoveFromCart = () => {
        const itemToRemove = {
            id: item.data.objectID,
            quantity: 1,
        };
        item.removeFromCart(itemToRemove);
    };

    const title = ensureTextMaxLength(item.data.title, 30);

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
                {item.isAddedToCart
                    ? (
                        <Button
                            onPress={() => handleRemoveFromCart()}
                            title="Remove from cart"
                            accessibilityLabel={`Add ${item.data.title} to cart`}
                            backgroundColorName="delete"
                        />
                    )
                    : (
                        <Button
                            onPress={() => handleAddToCart()}
                            title="Add to cart"
                            accessibilityLabel={`Add ${item.data.title} to cart`}
                        />
                    )}
            </View>
        </View>
    );
};

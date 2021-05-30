import React from 'react';
import { Image } from 'react-native';
import { styles } from './ProductItem.styles';
import { Text, Button, View } from './Themed';
import { DetailsInterface } from '../domains/Products/Products.types';

interface ProductItemProps {
    item: DetailsInterface
}

export const ProductItem = ({
    item,
}: ProductItemProps) => {
    const addToCart = () => {

    };
    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={{ uri: item.primaryImageSmall }}

            />
            <View style={styles.textContainer}>
                <Text style={styles.text}>{item.title}</Text>
            </View>
            <View style={styles.buttonContainer}>
                <Button
                    onPress={addToCart}
                    title="Add to cart"
                    accessibilityLabel={`Add ${item.title} to cart`}
                />
            </View>
        </View>
    );
};

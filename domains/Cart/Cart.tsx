import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { compose } from 'redux';
import { CartItem } from '../../components/CartItem';
import { withProducts, WithProductsProps } from '../Products/Products.hocs';
import { withCart, WithCartProps } from './Cart.hocs';
import { View, Text } from '../../components/Themed';
import { styles } from './Cart.styles';
import useColorScheme from '../../hooks/useColorScheme';
import { ProductItemInterface } from '../Products/Products.types';
import { Loading } from '../../components/Loading';

interface ProductListProps extends WithProductsProps, WithCartProps{}

const ITEMS_PER_PAGE = 10;

const Cart = ({
    productsDetails,
    cartItems,
    addToCart,
    removeFromCart,
}:ProductListProps) => {
    const colorScheme = useColorScheme();
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [items, setItems] = useState<ProductItemInterface[]>([]);
    const numberOfItems = cartItems.length;

    useEffect(() => {
        setIsLoading(false);

        const cartIds = cartItems.map((item) => item.id);
        const loadedDetails: ProductItemInterface[] = [];
        productsDetails.forEach((value, key) => {
            if (cartIds.includes(key)) {
                loadedDetails.push({
                    colorScheme,
                    data: value.data,
                    removeFromCart,
                    addToCart,
                    key: value.key,
                    isAddedToCart: value.isAddedToCart,
                });
            }
        });

        setItems(loadedDetails);
    }, [cartItems]);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.text}>
                    <Text style={styles.textNumber}>{numberOfItems}</Text>
                    {' products in your cart'}
                </Text>
            </View>
            {isLoading
                ? <Loading />
                : (
                    <FlatList
                        style={styles.list}
                        data={items}
                        renderItem={CartItem}
                        keyExtractor={(item) => item.key}
                        initialNumToRender={ITEMS_PER_PAGE}
                    />
                )}
        </View>
    );
};
const enhancer = compose(
    withProducts,
    withCart,
);

export default enhancer(Cart);

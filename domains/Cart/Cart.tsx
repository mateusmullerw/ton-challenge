import React, { useEffect, useState } from 'react';
import { FlatList, ActivityIndicator } from 'react-native';
import { compose } from 'redux';
import { CartItem } from '../../components/CartItem';
import { withProducts, WithProductsProps } from '../Products/Products.hocs';
import { withCart, WithCartProps } from './Cart.hocs';
import { View, Text } from '../../components/Themed';
import { styles } from './Cart.styles';
import useColorScheme from '../../hooks/useColorScheme';
import Colors from '../../constants/Colors';
import { ProductItemInterface } from '../Products/Products.types';

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
        const cartItemsDetails = cartItems.map((item) => (
            {
                data: productsDetails[item.id].data,
                addToCart,
                removeFromCart,
                key: productsDetails[item.id].key,
                isAddedToCart: productsDetails[item.id].isAddedToCart,
            }
        ));

        setItems(cartItemsDetails);
    }, [cartItems]);

    return (
        <View style={styles.container}>
            <Text>{`${numberOfItems} products in your cart:`}</Text>
            {isLoading
                ? <ActivityIndicator size="large" color={Colors[colorScheme].text} />
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

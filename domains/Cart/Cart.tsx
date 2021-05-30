import React, { useEffect, useState } from 'react';
import { FlatList, ActivityIndicator } from 'react-native';
import { compose } from 'redux';
import { ProductItem } from '../../components/ProductItem';
import { withProducts, WithProductsProps } from '../Products/Products.hocs';
import { withCart, WithCartProps } from './Cart.hocs';
import { View } from '../../components/Themed';
import { styles } from './Cart.styles';
import useColorScheme from '../../hooks/useColorScheme';
import Colors from '../../constants/Colors';
import { DetailsInterface } from '../Products/Products.types';

interface ProductListProps extends WithProductsProps, WithCartProps{}

const ITEMS_PER_PAGE = 10;

const Cart = ({
    productsDetails,
    cartItems,
}:ProductListProps) => {
    const colorScheme = useColorScheme();
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [items, setItems] = useState<DetailsInterface[]>([]);

    useEffect(() => {
        setIsLoading(false);
        const cartItemsDetails = cartItems.map((item) => productsDetails[item.id]);
        setItems(cartItemsDetails);
    }, [cartItems]);

    return (
        <View style={styles.container}>
            {isLoading
                ? <ActivityIndicator size="large" color={Colors[colorScheme].text} />
                : (
                    <FlatList
                        style={styles.list}
                        data={items}
                        renderItem={ProductItem}
                        keyExtractor={(item) => item.metadataDate}
                        numColumns={2}
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

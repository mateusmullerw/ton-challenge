import React, { useEffect, useState } from 'react';
import { FlatList, ActivityIndicator } from 'react-native';
import { compose } from 'redux';
import { ProductItem } from '../../components/ProductItem';
import { withProducts, WithProductsProps } from './Products.hocs';
import { withCart, WithCartProps } from '../Cart/Cart.hocs';
import { View } from '../../components/Themed';
import { styles } from './ProducList.styles';
import { LOAD_STATE } from '../../redux/constants';
import useColorScheme from '../../hooks/useColorScheme';
import Colors from '../../constants/Colors';
import { ProductItemInterface } from './Products.types';

interface ProductListProps extends WithProductsProps, WithCartProps{}

const ITEMS_PER_PAGE = 10;

const ProductList = ({
    productListLoadState,
    productList,
    productsDetails,
    fetchProductList,
    fetchProductDetails,
    addToCart,
    removeFromCart,
}:ProductListProps) => {
    const colorScheme = useColorScheme();
    const [currentPage, setCurrentPage] = useState<number>(0);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [pageItems, setPageItems] = useState<ProductItemInterface[]>([]);

    const loadPage = (page: number, itemsPerPage: number) => {
        const pageStart = page * itemsPerPage;
        const pageEnd = pageStart + itemsPerPage;

        const pageItemsList = productList.objectIDs
            .slice(pageStart, pageEnd);
        pageItemsList.forEach((item) => fetchProductDetails(item));
    };

    const loadNextPage = () => {
        const nextPage = currentPage + 1;
        loadPage(nextPage, ITEMS_PER_PAGE);
        setCurrentPage(nextPage);
    };

    useEffect(() => {
        if (!productList.objectIDs) {
            fetchProductList();
        }
    }, []);

    useEffect(() => {
        console.log(Object.values(productsDetails));
        setPageItems(Object.values(productsDetails).map((item) => (
            {
                data: item.data,
                addToCart,
                removeFromCart,
                key: item.key,
                isAddedToCart: item.isAddedToCart,
            }
        )));
    }, [productsDetails]);

    useEffect(() => {
        if (productListLoadState === LOAD_STATE.SUCCESS) {
            loadNextPage();
            setIsLoading(false);
        }
    }, [productListLoadState]);

    return (
        <View style={styles.container}>
            {isLoading
                ? <ActivityIndicator size="large" color={Colors[colorScheme].text} />
                : (
                    <FlatList
                        style={styles.list}
                        data={[...pageItems]}
                        renderItem={ProductItem}
                        keyExtractor={(item) => item.key}
                        // extraData={Object.assign('', detailsUpdated)}
                        numColumns={2}
                        initialNumToRender={ITEMS_PER_PAGE}
                        // onEndReached={loadNextPage}
                        // onEndReachedThreshold={1}
                    />
                )}
        </View>
    );
};
const enhancer = compose(
    withProducts,
    withCart,
);

export default enhancer(ProductList);

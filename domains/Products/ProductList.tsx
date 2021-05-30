import React, { useEffect, useState } from 'react';
import { FlatList, ActivityIndicator } from 'react-native';
import { compose } from 'redux';
import { ProductItem } from '../../components/ProductItem';
import { withProducts, WithProductsProps } from './Products.hocs';
import { View } from '../../components/Themed';
import { styles } from './ProducList.styles';
import { LOAD_STATE } from '../../redux/constants';
import useColorScheme from '../../hooks/useColorScheme';
import Colors from '../../constants/Colors';

interface ProductListProps extends WithProductsProps{}

const ITEMS_PER_PAGE = 10;

const ProductList = ({
    productListLoadState,
    productList,
    productsDetails,
    fetchProductList,
    fetchProductDetails,
}:ProductListProps) => {
    const colorScheme = useColorScheme();
    const [currentPage, setCurrentPage] = useState<number>(0);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const loadPage = (page: number, itemsPerPage: number) => {
        const offset = page * itemsPerPage;
        const pageEnd = offset + itemsPerPage;
        const pageItems = productList.objectIDs
            .slice(offset, pageEnd);

        pageItems.forEach((item) => fetchProductDetails(item));
    };

    useEffect(() => {
        if (!productList.objectIDs) {
            fetchProductList();
        }
    }, []);

    useEffect(() => {
        if (productListLoadState === LOAD_STATE.SUCCESS) {
            loadPage(currentPage, ITEMS_PER_PAGE);
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
                        data={[...Object.values(productsDetails)]}
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
);

export default enhancer(ProductList);

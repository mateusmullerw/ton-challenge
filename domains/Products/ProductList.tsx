import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { compose } from 'redux';
import { ProductItem } from '../../components/ProductItem';
import { withProducts, WithProductsProps } from './Products.hocs';
import { withCart, WithCartProps } from '../Cart/Cart.hocs';
import { View } from '../../components/Themed';
import { Loading } from '../../components/Loading';
import { EndOfListLoading } from '../../components/EndOfListLoading';
import { styles } from './ProducList.styles';
import { LOAD_STATE } from '../../redux/constants';
import { ProductItemInterface, ProductDetailsInterface } from './Products.types';

interface ProductListProps extends WithProductsProps, WithCartProps{}

const ITEMS_PER_PAGE = 6;

const ProductList = ({
    productListLoadState,
    productList,
    productsDetails,
    fetchProductList,
    fetchProductDetails,
    addToCart,
    removeFromCart,
    detailsUpdated,
}:ProductListProps) => {
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
        if (productListLoadState === LOAD_STATE.SUCCESS) {
            loadNextPage();
            setIsLoading(false);
        }
    }, [productListLoadState]);

    useEffect(() => {
        const loadedDetails: ProductDetailsInterface[] = [];
        productsDetails.forEach((product) => {
            loadedDetails.push(product);
        });

        setPageItems(loadedDetails.map((item) => (
            {
                data: item.data,
                addToCart,
                removeFromCart,
                key: item.key,
                isAddedToCart: item.isAddedToCart,
            }
        )));
    }, [productsDetails, detailsUpdated]);

    return (
        <View style={styles.container}>
            {isLoading
                ? <Loading />
                : (
                    <FlatList
                        style={styles.list}
                        data={[...pageItems]}
                        renderItem={ProductItem}
                        keyExtractor={(item) => item.key}
                        numColumns={2}
                        initialNumToRender={ITEMS_PER_PAGE}
                        onEndReached={loadNextPage}
                        onEndReachedThreshold={0.1}
                        ListFooterComponent={EndOfListLoading}
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

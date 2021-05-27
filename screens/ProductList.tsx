import * as React from 'react';
import { FlatList } from 'react-native';

import { Text, View } from '../components/Themed';
import { test } from '../mockresponse';
import { styles } from './ProducList.styles';

export const ProductList = () => {
    const response = JSON.parse(test);
    const { items } = response.itemList;
    return (
        <View style={styles.container}>
            <FlatList
                data={items}
                renderItem={renderItem}
                keyExtractor={(item) => item.productId}
                numColumns={2}
            />
        </View>
    );
};
type itemType={item:{ displayName: string, productId: string}}
const renderItem = ({ item }: itemType) => (
    <Text style={styles.title}>{item.displayName}</Text>
);

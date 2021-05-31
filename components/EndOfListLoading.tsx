import React from 'react';
import { View } from './Themed';
import { styles } from './Loading.styles';
import { Loading } from './Loading';

export const EndOfListLoading = () => (
    <View style={styles.container}>
        <Loading />
    </View>
);

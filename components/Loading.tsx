import React from 'react';
import {
    ActivityIndicator,
} from 'react-native';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import { View } from './Themed';
import { styles } from './Loading.styles';

export const Loading = () => {
    const colorScheme = useColorScheme();
    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" color={Colors[colorScheme].textHigh} />
        </View>
    );
};

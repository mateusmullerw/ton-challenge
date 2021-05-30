import { createStackNavigator, StackScreenProps } from '@react-navigation/stack';
import * as React from 'react';

import ProductList from '../domains/Products/ProductList';
import Cart from '../domains/Cart/Cart';
import { IconButton } from '../components/IconButton';
import useColorScheme from '../hooks/useColorScheme';
import Colors from '../constants/Colors';
import { ScreensStackParamList } from '../types';

const Stack = createStackNavigator();

export const HeaderNavigator = ({
    navigation,
}: StackScreenProps<ScreensStackParamList, 'ProductList'>) => {
    const colorScheme = useColorScheme();

    return (
        <Stack.Navigator
            screenOptions={{
                headerTintColor: Colors[colorScheme].tint,
                headerTitle: 'Ton Challenge',
            }}
        >
            <Stack.Screen
                name="ProductList"
                component={ProductList as React.FunctionComponent}
                options={{
                    headerTitle: 'Products',
                    headerRight: () => (
                        <IconButton
                            onPress={() => navigation.navigate('ShoppingCart')}
                            iconName="cart-outline"
                            colorName="textHigh"
                        />
                    ),
                }}
            />
            <Stack.Screen
                name="ShoppingCart"
                component={Cart as React.FunctionComponent}
                options={{
                    headerTitle: 'Shopping Cart',
                    headerLeft: () => (
                        <IconButton
                            onPress={() => navigation.goBack()}
                            iconName="arrow-back"
                            colorName="textHigh"
                        />
                    ),
                }}
            />
        </Stack.Navigator>
    );
};

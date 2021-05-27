import { createStackNavigator, StackScreenProps } from '@react-navigation/stack';
import * as React from 'react';

import { ProductList } from '../screens/ProductList';
import TabTwoScreen from '../screens/TabTwoScreen';
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
                component={ProductList}
                options={{
                    headerTitle: 'Products',
                    headerRight: () => (
                        <IconButton
                            onPress={() => navigation.navigate('ShoppingCart')}
                            iconName="cart-outline"
                            color={Colors[colorScheme].text}
                        />
                    ),
                }}
            />
            <Stack.Screen
                name="ShoppingCart"
                component={TabTwoScreen}
                options={{
                    headerTitle: 'Shopping Cart',
                    headerLeft: () => (
                        <IconButton
                            onPress={() => navigation.goBack()}
                            iconName="arrow-back"
                            color={Colors[colorScheme].text}
                        />
                    ),
                }}
            />
        </Stack.Navigator>
    );
};

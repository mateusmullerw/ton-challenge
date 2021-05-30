import { createStackNavigator, StackScreenProps } from '@react-navigation/stack';
import * as React from 'react';
import { compose } from 'redux';
import { withCart, WithCartProps } from '../domains/Cart/Cart.hocs';

import ProductList from '../domains/Products/ProductList';
import Cart from '../domains/Cart/Cart';
import { IconButton } from '../components/IconButton';
import { IconButtonNotification } from '../components/IconButtonNotification';
import useColorScheme from '../hooks/useColorScheme';
import Colors from '../constants/Colors';
import { ScreensStackParamList } from '../types';

const Stack = createStackNavigator();

interface HeaderNavigatorInterface extends WithCartProps, StackScreenProps<ScreensStackParamList, 'ProductList'>{}

const HeaderNavigator = ({
    navigation,
    cartItems,
}: HeaderNavigatorInterface) => {
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
                        <IconButtonNotification
                            onPress={() => navigation.navigate('ShoppingCart')}
                            iconName="cart-outline"
                            colorName="textHigh"
                            notificationNumber={cartItems.length}
                            notificationColorName="notification"
                            notificationTextColorName="textHigh"
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

const enhancer = compose(
    withCart,
);

export default enhancer(HeaderNavigator);

/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */
import { GestureResponderEvent } from 'react-native';

export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type ScreensStackParamList = {
  ProductList: undefined;
  ShoppingCart: undefined;
};

export type BottomTabParamList = {
  TabOne: undefined;
  TabTwo: undefined;
};

export type TabOneParamList = {
  TabOneScreen: undefined;
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
};

export type PressEvent = (event: GestureResponderEvent) => void

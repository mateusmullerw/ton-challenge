import React from 'react';
import { TouchableHighlight, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import type { PressEvent } from '../types';
import { styles } from './IconButton.styles';
import Colors, { ColorsTypes } from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';

type IconName = keyof typeof Ionicons.glyphMap;
type ColorName= ColorsTypes
export interface IconButtonProps {
    onPress: PressEvent
    iconName: IconName
    colorName: ColorName
}
export const IconButton = ({ onPress, iconName, colorName }: IconButtonProps) => {
    const colorScheme = useColorScheme();
    const iconColor = Colors[colorScheme][colorName];

    return (
        <View style={styles.container}>
            <TouchableHighlight onPress={onPress}>
                <View style={styles.button}>
                    <Ionicons size={30} name={iconName} color={iconColor} />
                </View>
            </TouchableHighlight>
        </View>
    );
};

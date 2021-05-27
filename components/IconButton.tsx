import React from 'react';
import { TouchableHighlight, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import type { PressEvent } from '../types';
import { styles } from './IconButton.styles';

interface IconButonProps {
    onPress: PressEvent
    iconName: keyof typeof Ionicons.glyphMap
    color: string
}
export const IconButton = ({ onPress, iconName, color }: IconButonProps) => (
    <View style={styles.container}>
        <TouchableHighlight onPress={onPress}>
            <View style={styles.button}>
                <Ionicons size={30} style={styles.icon} name={iconName} color={color} />
            </View>
        </TouchableHighlight>
    </View>
);

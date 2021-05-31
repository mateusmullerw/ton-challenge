import React, { useEffect } from 'react';
import { TextInput, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './SearchBar.styles';
import Colors, { ColorSchemeType } from '../constants/Colors';

export interface SearchBarProps {
    onSubmit: (text: string) => void
    colorScheme: ColorSchemeType
    initialValue: string
}

export const SearchBar = ({ onSubmit, colorScheme, initialValue }:SearchBarProps) => {
    const [value, setValue] = React.useState('');

    useEffect(() => {
        setValue(initialValue);
    }, []);

    const handleSubmit = (text: string) => {
        setValue(text);
        onSubmit(text);
    };

    return (
        <View style={{ ...styles.container, backgroundColor: Colors[colorScheme].searchBar }}>
            <View style={styles.iconButtonContainer}>
                <Ionicons size={30} name="search" color={Colors[colorScheme].textLow} />
            </View>
            <TextInput
                style={{ ...styles.input, color: Colors[colorScheme].textHigh }}
                onChangeText={(text:string) => setValue(text)}
                value={value}
                placeholder="Search"
                returnKeyType="search"
                onSubmitEditing={(event) => handleSubmit(event.nativeEvent.text)}
                placeholderTextColor={Colors[colorScheme].textMedium}
            />
        </View>
    );
};

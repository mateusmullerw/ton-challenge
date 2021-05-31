import React from 'react';
import { View } from 'react-native';
import { IconButtonProps, IconButton } from './IconButton';
import { styles } from './IconButtonNotification.styles';
import Colors, { ColorsTypes } from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';

import { Text } from './Themed';

interface IconButonNotificationProps extends IconButtonProps{
    notificationNumber: number,
    notificationColorName: ColorsTypes,
    notificationTextColorName: ColorsTypes,
}
export const IconButtonNotification = ({
    onPress,
    iconName,
    colorName,
    notificationNumber = 0,
    notificationColorName = 'notification',
    notificationTextColorName = 'white',
}: IconButonNotificationProps) => {
    const colorScheme = useColorScheme();
    const backgroundColor = Colors[colorScheme][notificationColorName];
    const textColor = Colors[colorScheme][notificationTextColorName];

    const showNotification = notificationNumber > 0;
    return (
        <View style={styles.container}>
            <IconButton
                onPress={onPress}
                iconName={iconName}
                colorName={colorName}
            />
            {showNotification
                ? (
                    <View style={{ ...styles.textContainer, backgroundColor }}>
                        <Text
                            style={{ ...styles.text, color: textColor }}
                        >
                            {notificationNumber}
                        </Text>
                    </View>
                )
                : <></>}

        </View>
    );
};

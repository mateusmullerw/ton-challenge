import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        position: 'relative',
        flexDirection: 'row',
        flex: 1,
        margin: 10,
        paddingHorizontal: 10,
        borderRadius: 8,
        justifyContent: 'center',
    },
    input: {
        flex: 1,
        fontSize: 18,
    },
    iconButtonContainer: {
        position: 'absolute',
        top: 8,
        right: 10,
    },
});

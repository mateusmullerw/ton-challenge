import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        position: 'relative',
        flex: 1,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',

    },
    textContainer: {
        position: 'absolute',
        right: 10,
        top: 10,
        fontSize: 10,
        borderRadius: 20,
        overflow: 'hidden',
        width: 15,
        height: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 10,
        fontWeight: '700',
    },
});

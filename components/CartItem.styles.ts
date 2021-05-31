import { StyleSheet } from 'react-native';
import Layout from '../constants/Layout';

export const styles = StyleSheet.create({
    container: {
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        marginHorizontal: 10,
        marginVertical: 5,
        overflow: 'hidden',
        maxWidth: Layout.window.width,
    },
    image: {
        height: 70,
        width: 70,
        resizeMode: 'contain',
    },
    textContainer: {
        flexBasis: 'auto',
        flexGrow: 1,
        flexShrink: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        padding: 10,
        height: 70,
    },
    text: {
        fontSize: 16,
    },
    buttonContainer: {
        width: 50,
    },
});

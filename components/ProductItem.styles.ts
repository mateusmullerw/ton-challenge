import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 10,
        overflow: 'hidden',
        // backgroundColor: '#999',
    },
    image: {
        // flex: 1,
        height: 200,
        borderWidth: 3,
        // borderColor: '#333888',
        width: '100%',
        resizeMode: 'contain',
    },
    textContainer: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: 10,
        height: 70,
        // backgroundColor: '#573279',
        // alignItems: 'flex-start',
    },
    text: {
        fontSize: 16,
    },
    buttonContainer: {
        width: '100%',
        justifyContent: 'flex-start',
        paddingTop: 15,
        paddingBottom: 15,
        color: '#573279',
        // alignItems: 'flex-start',
    },
});

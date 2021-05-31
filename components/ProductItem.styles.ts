import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        borderRadius: 5,
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 10,
        marginVertical: 5,
        marginLeft: 10,
        overflow: 'hidden',
    },
    image: {
        height: 200,
        width: '100%',
        resizeMode: 'contain',
    },
    textContainer: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: 10,
        height: 70,
    },
    text: {
        fontSize: 18,
    },
    buttonContainer: {
        width: '100%',
        justifyContent: 'flex-start',
        paddingTop: 15,
        paddingBottom: 0,
    },
});

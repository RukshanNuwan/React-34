// @author phoenix|201212_1242

import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
    container: {
        padding: 20,
        flex: 1
    },

    titleText: {
        fontFamily: 'nunito-bold',
        fontSize: 18,
        color: '#333'
    },

    paragraph: {
        marginVertical: 8,
        lineHeight: 20
    },

    input: {
        padding: 8,
        borderWidth: 1,
        borderColor: 'teal',
        borderRadius: 5,
        fontSize: 18
    },

    errorText: {
        marginTop: 6,
        marginBottom: 10,
        color: 'crimson',
        fontWeight: 'bold'
    }
});

export const images = {
    ratings: {
        '1': require('../assets/rating-1.png'),
        '2': require('../assets/rating-2.png'),
        '3': require('../assets/rating-3.png'),
        '4': require('../assets/rating-4.png'),
        '5': require('../assets/rating-5.png')
    }
} 
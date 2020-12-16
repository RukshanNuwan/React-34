import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View, TouchableOpacityComponent } from 'react-native';

export default function FlatButton({ text, onPress }) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>{text}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        paddingVertical: 10,
        paddingHorizontal: 8,
        borderRadius: 5,
        backgroundColor: 'teal'
    },

    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 14,
        textAlign: 'center'
    }
});
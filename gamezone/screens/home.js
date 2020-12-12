import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function Home() {
    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>Home Screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 30
    },

    titleText: {
        marginTop: 5,
        fontFamily: 'nunito-bold',
        fontSize: 18
    }
});
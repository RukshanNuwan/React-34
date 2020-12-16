import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

// custom
import { globalStyles } from '../styles/global';

export default function About() {
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.text}>This is an app which give me some great basic knowledge to learn react native app development. Thank you!</Text>
            <Text style={styles.signature}>&copy; Phoenix|2020</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    signature: {
        marginTop: 10,
        textAlign: 'center'
    }
});
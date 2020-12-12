import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

// custom
import { globalStyles } from '../styles/global';

export default function About() {
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.text}>About Screen</Text>
        </View>
    );
}
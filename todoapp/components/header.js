// @author phoenix|201211_0800

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>My ToDos</Text>
        </View>
    )
}

// styles
const styles = StyleSheet.create({
    header: {
        height: 80,
        paddingTop: 35,
        backgroundColor: 'teal'
    },

    title: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold'
    }
});
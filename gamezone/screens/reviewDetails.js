import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

// custom
import { globalStyles } from '../styles/global';

export default function ReviewDetails({ navigation }) {
    // function area
    const pressHandler = () => {
        navigation.goBack();
    }


    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.text}>{navigation.getParam('title')}</Text>
            <Text style={globalStyles.text}>{navigation.getParam('body')}</Text>
            <Text style={globalStyles.text}>{navigation.getParam('rating')}</Text>
        </View>
    );
}
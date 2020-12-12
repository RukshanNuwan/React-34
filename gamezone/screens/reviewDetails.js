import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

// custom
import { globalStyles } from '../styles/global';

export default function ReviewDetails({ navigation }) {
    // function area
    const pressHandler = () => {
        navigation.goBack();
    }


    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.text}>Review Details Screen</Text>
            <Button title='Back to Home' onPress={pressHandler} />
        </View>
    );
}
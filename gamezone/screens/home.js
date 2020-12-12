import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

// custom
import { globalStyles } from '../styles/global';

export default function Home({ navigation }) {
    // function area
    const pressHandler = () => {
        navigation.navigate('ReviewDetails');   // navigation.push('ReviewDetails')
    }


    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>Home Screen</Text>
            <Button title='Go to Review Details' onPress={pressHandler} />
        </View>
    );
}
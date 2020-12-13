import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

// custom
import { globalStyles, images } from '../styles/global';
import Card from '../shared/card';

export default function ReviewDetails({ navigation }) {
    // function area
    const rating = navigation.getParam('rating');


    return (
        <View style={globalStyles.container}>
            <Card>
                <Text style={globalStyles.text}>{navigation.getParam('title')}</Text>
                <Text style={globalStyles.text}>{navigation.getParam('body')}</Text>
                <View style={styles.rating}>
                    <Text>GameZone rating: </Text>
                    <Image source={images.ratings[rating]} />
                </View>
            </Card>
        </View>
    );
}

const styles = StyleSheet.create({
    rating: {
        marginTop: 16,
        paddingTop: 16,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        borderTopWidth: 1,
        borderTopColor: '#eee'
    }
});
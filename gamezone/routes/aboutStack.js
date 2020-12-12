// @author phoenix|201212_1458

import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';

import About from '../screens/about';
import Header from '../shared/header';

const screens = {
    About: {
        screen: About,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header navigation={navigation} title='About GameZone' />
            }
        }
    }
}

const AboutStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: 'teal'
        },

        headerTintColor: '#fff'
    }
});

export default AboutStack;
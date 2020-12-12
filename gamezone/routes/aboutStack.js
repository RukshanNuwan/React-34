// @author phoenix|201212_1458

import { createStackNavigator } from 'react-navigation-stack';

import About from '../screens/about';

const screens = {
    About: {
        screen: About,
        navigationOptions: {
            title: 'About GameZone'
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
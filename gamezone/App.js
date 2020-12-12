// @author phoenix|201212_0843

import React, { useState } from 'react';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

// custom components
import Home from './screens/home';

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// function area
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const getFonts = () => Font.loadAsync({
  'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
  'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf')
});


export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (fontLoaded) {
    return (
      <Home />
    );
  } else {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setFontLoaded(true)}
        onError={console.error}
      />
    );
  }
}
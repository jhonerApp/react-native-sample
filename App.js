
import React, { useEffect, useState } from 'react';



import Home from './screens/home';
import About from './screens/about';
import ReviewDetails from './screens/reviewDetails';

import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';


const getFonts = () => Font.loadAsync({
  'sourceSansPro-Regular': require('./assets/Source_Sans_Pro/SourceSansPro-Regular.ttf'),
  'sourceSansPro-SemiBold': require('./assets/Source_Sans_Pro/SourceSansPro-SemiBold.ttf'),
  'sourceSansPro-SemiBoldItalic': require('./assets/Source_Sans_Pro/SourceSansPro-SemiBoldItalic.ttf'),
});

export default function App() {



  const [fontsLoaded, setFontsLoaded] = useState(false)

  if (fontsLoaded) {
    return (
      <Home />
    )
  } else {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setFontsLoaded(true)} 
        onError={(error)=> console.warn(error)}
        />
    )
  }

}



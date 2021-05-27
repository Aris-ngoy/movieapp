import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { default as theme } from './src/themes/custom-theme.json'
import { EvaIconsPack } from '@ui-kitten/eva-icons';

import HomeScreen from './src/Screens/Home/HomeScreen'
import DetailScreen from './src/Screens/Detail/DetailScreen'

const Stack = createStackNavigator()

const App = () =>{
  return(
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={{ ...eva.light, ...theme }}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Detail" component={DetailScreen} options={{ headerShown: false }} />
          </Stack.Navigator>
        </NavigationContainer>
      </ApplicationProvider>
    </>
  )
}
export default App;
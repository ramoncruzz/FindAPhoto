import React from 'react';
import {StatusBar} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Home} from '../pages';

const Stack = createNativeStackNavigator();

const RootStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={Home} />
  </Stack.Navigator>
);

const App = () => (
  <NavigationContainer>
    <StatusBar barStyle="default" backgroundColor="transparent" />
    <RootStack />
  </NavigationContainer>
);

export default App;

import React from 'react';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Home} from '../pages';
import store from '../store/index';

const Stack = createNativeStackNavigator();

const RootStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={Home} />
  </Stack.Navigator>
);

const App = () => (
  <Provider store={store}>
    <NavigationContainer>
      <StatusBar barStyle="default" backgroundColor="transparent" />
      <RootStack />
    </NavigationContainer>
  </Provider>
);

export default App;

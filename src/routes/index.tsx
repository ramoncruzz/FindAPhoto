import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Header} from '../components/atoms';
import {Home} from '../pages';
import {useFirebase} from '../hooks';

const Stack = createNativeStackNavigator();

const RootStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      component={Home}
      name="Find a Photo"
      options={{
        header: () => (
          <Header
            testID="header"
            title="Find a Photo"
            onPressRight={() => {
              console.log('right');
            }}
          />
        ),
      }}
    />
  </Stack.Navigator>
);

const App = () => {
  const {loadEnvironmet} = useFirebase();
  useEffect(() => {
    loadEnvironmet().then();
  }, [loadEnvironmet]);
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <RootStack />
    </NavigationContainer>
  );
};

export default App;

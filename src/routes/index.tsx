import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Header} from '../components/atoms';
import {Home, Detail} from '../pages';
import {useFirebase} from '../hooks';
import {useAppDispatch} from '../store';
import {changeSearchState} from '../store/Photo';
const Stack = createNativeStackNavigator();

type Props = {
  enableSearch: () => void;
};
const RootStack: React.FC<Props> = ({enableSearch}) => (
  <Stack.Navigator>
    <Stack.Screen
      component={Home}
      name="home"
      options={{
        header: () => (
          <Header
            testID="header"
            title="Find a Photo"
            onPressRight={enableSearch}
          />
        ),
      }}
    />
    <Stack.Screen
      component={Detail}
      name="detail"
      options={{
        header: () => <Header testID="header" title="Find a Photo" />,
      }}
    />
  </Stack.Navigator>
);

const App = () => {
  const {loadEnvironmet} = useFirebase();
  const dispatch = useAppDispatch();
  useEffect(() => {
    loadEnvironmet().then();
  }, [loadEnvironmet]);
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <RootStack enableSearch={() => dispatch(changeSearchState())} />
    </NavigationContainer>
  );
};

export default App;

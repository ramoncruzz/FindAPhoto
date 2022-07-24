import React from 'react';
import {View, Text, Button} from 'react-native';
import {getPhoto} from '../store/Photo';
import {useAppDispatch} from '../store';
const Home: React.FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  return (
    <View style={{flex: 1, backgroundColor: 'red'}}>
      <Text>home</Text>
      <Button
        testID="btn"
        title="buscar"
        onPress={() => dispatch(getPhoto('street'))}
      />
    </View>
  );
};

export default Home;

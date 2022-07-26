import React from 'react';
import {View, Text, Button} from 'react-native';
import {getPhoto} from '../store/Photo';
import {useAppDispatch, useTypedSelector} from '../store';
import {TextField} from '../components/atoms';

const Home: React.FC = (): JSX.Element => {
  const [text, setText] = React.useState<string>('XX');
  const dispatch = useAppDispatch();
  const environment = useTypedSelector(state => state.environment);
  
  return (
    <View style={{flex: 1, backgroundColor: 'red'}}>
      <Text>{text}</Text>
      <TextField placeholder='placeholder' onChangeText={setText} />
      <Button
        testID="btn2"
        title="buscar"
        onPress={() => dispatch(getPhoto('street'))}
      />
    </View>
  );
};

export default Home;

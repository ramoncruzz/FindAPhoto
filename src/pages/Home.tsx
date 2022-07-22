import React from 'react';
import {View, Text} from 'react-native';
import {getPhoto} from '../store/Photo';
import {useAppDispatch} from '../store';
const Home: React.FC = (): JSX.Element => {
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(getPhoto('street'));
  }, [dispatch]);

  return (
    <View style={{flex: 1, backgroundColor: 'red'}}>
      <Text>home</Text>
    </View>
  );
};

export default Home;

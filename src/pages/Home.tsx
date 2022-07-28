import React from 'react';
import {Div} from 'react-native-magnus';
import {useNavigation} from '@react-navigation/native';
import {changeSearchState, getPhoto} from '../store/Photo';
import {useAppDispatch, useTypedSelector} from '../store';
import {ImageGrid} from '../components/molecules';
import {Find} from '../components/organisms';
import {trackPageView} from '../utils/trackTestID';

const nameForTesting = 'home';

const Home: React.FC = (): JSX.Element => {
  const navigation = useNavigation();

  const dispatch = useAppDispatch();
  const {isSearching, result} = useTypedSelector(state => state.searchPhoto);

  const onPress = item => {
    console.log(JSON.stringify(item, null, '\t'));
    navigation.navigate('detail', item);
  };
  return (
    <Div testID={trackPageView(nameForTesting, 'page')} flex={1}>
      <ImageGrid
        testID="grid"
        images={result ? result.hits : []}
        onPress={onPress}
      />
      <Find
        title="Let's find some pictures"
        text="Describe a little what you're thinking..."
        visible={isSearching}
        onPressCancel={() => {
          dispatch(changeSearchState());
        }}
        onPressGo={term => {
          dispatch(changeSearchState());
          dispatch(getPhoto(term));
        }}
        testID="teste"
      />
    </Div>
  );
};

export default Home;

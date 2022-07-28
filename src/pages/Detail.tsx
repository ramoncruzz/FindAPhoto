import React from 'react';
import {Text} from 'react-native-magnus';
import {Header} from '../components/atoms';
import {InfoPhoto} from '../components/organisms';
import {ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Hit} from '../utils/types';
import {trackComponent} from '../utils/trackTestID';

type Props = {
  route: {key: string; name: string; params: Hit};
};
const nameForTesting = 'detail';
const Detail: React.FC<Props> = ({route}): JSX.Element => {
  const navigation = useNavigation();

  React.useEffect(() => {
    navigation.setOptions({
      header: () => (
        <Header
          testID="header"
          title="Find a Photo"
          onPressLeft={() => navigation.goBack()}
        />
      ),
    });
  }, [navigation]);
  return (
    <ScrollView style={{flex: 1}}>
      <InfoPhoto
        photo={route.params}
        testID={trackComponent(nameForTesting, 'infoPhoto')}
      />
      {/* <Text>{JSON.stringify(route.params, null, '\t')}</Text> */}
    </ScrollView>
  );
};

export default Detail;

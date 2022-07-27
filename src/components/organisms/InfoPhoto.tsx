import React from 'react';
import {Div, Avatar, Text, Tag} from 'react-native-magnus';
import {Image} from '../atoms';
import {Hit} from '../../utils/types';
import {trackImage} from '../../utils/trackTestID';

export interface Props {
  photo: Hit;
  testID: string;
}

const InfoPhoto: React.FC<Props> = (props): JSX.Element => {
  const {photo, testID} = props;

  return (
    <Div
      flex={1}
      testID={testID}
      bg="white"
      p={15}
      m={15}
      rounded="md"
      shadow="sm">
      <Div flexDir="row" alignItems="center" mb={20}>
        <Avatar
          shadow={1}
          source={{
            uri: photo.userImageURL,
          }}
        />
        <Text ml={10}>{photo.user}</Text>
      </Div>
      <Image
        url={photo.largeImageURL}
        testID={trackImage(testID, 'user')}
        width="100%"
        height={500}>
        <Text
          bg="black"
          opacity={0.5}
          color="white"
          fontSize={30}
          ml={10}
          textAlign="center">
          {photo.imageHeight} x {photo.imageWidth}
        </Text>
      </Image>

      <Div flexDir="row" justifyContent="space-around" mt={20}>
        <Text ml={10}>Tags:</Text>
        {photo.tags.split(',').map(item => (
          <Tag fontWeight="bold" ml="sm" bg="blue700" color="white">
            {item}
          </Tag>
        ))}
      </Div>
      {/* <Text>{JSON.stringify(photo, null, '\t')}</Text> */}
    </Div>
  );
};

export default InfoPhoto;

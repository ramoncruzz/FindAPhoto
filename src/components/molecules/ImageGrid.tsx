import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {Item, Image} from '../atoms';
import {Hit} from '../../utils/types';

export interface Props {
  images: Array<Hit>;
  onPress: (image: Hit) => void;
  testID: string;
}

const styles = StyleSheet.create({
  list: {backgroundColor: 'transparent', flex: 1},
});

const ImageGrid: React.FC<Props> = ({images, onPress, testID}): JSX.Element => {
  return (
    <FlatList
      testID={testID}
      data={images}
      renderItem={({item, index}) => (
        <Item testID={`${testID}_item_${index}`} onPress={() => onPress(item)}>
          <Image
            testID={`${testID}_img_${index}`}
            url={item.webformatURL}
            width="100%"
            height={300}
          />
        </Item>
      )}
      style={styles.list}
    />
  );
};

export default ImageGrid;

import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {Item, Image} from '../atoms';
import {Hit} from '../../utils/types';

export interface Props {
  images: Array<Hit>;
  onPress: (image: Hit) => void;
}

const styles = StyleSheet.create({
  list: {backgroundColor: 'transparent', flex: 1},
});

const ImageGrid: React.FC<Props> = ({images, onPress}): JSX.Element => {
  return (
    <FlatList
      data={images}
      renderItem={({item}) => (
        <Item onPress={() => onPress(item)}>
          <Image url={item.webformatURL} width="100%" height={300} />
        </Item>
      )}
      style={styles.list}
    />
  );
};

export default ImageGrid;

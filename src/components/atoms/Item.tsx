import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';

export interface Props {
  children: React.ReactNode;
  onPress: () => void;
}

const style = StyleSheet.create({
  main: {
    backgroundColor: 'black',
    margin: 5,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
const Item: React.FC<Props> = ({children, onPress}): JSX.Element => {
  return (
    <TouchableOpacity style={style.main} onPress={onPress}>
      {children}
    </TouchableOpacity>
  );
};

export default Item;

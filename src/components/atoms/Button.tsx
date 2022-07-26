import React from 'react';
import {Button as Btn} from 'react-native-magnus';

export interface Props {
  text: string;
  onPress: () => void;
  type: 'go' | 'clean';
}

const Button: React.FC<Props> = ({text, type, onPress}): JSX.Element => {
  if (type === 'clean') {
    return (
      <Btn
        mt="lg"
        ml="lg"
        px="xl"
        py="lg"
        bg="red500"
        color="white"
        underlayColor="red600"
        onPress={onPress}>
        {text}
      </Btn>
    );
  }
  return (
    <Btn
      mt="lg"
      ml="lg"
      px="xl"
      py="lg"
      bg="green700"
      color="white"
      underlayColor="green700"
      onPress={onPress}>
      {text}
    </Btn>
  );
};

export default Button;

import React from 'react';
import {Input, Icon} from 'react-native-magnus';

export interface Props {
  placeholder?: string;
  onChangeText: (text: string) => void;
}

const TextField: React.FC<Props> = ({
  placeholder,
  onChangeText,
}): JSX.Element => {
  return (
    <Input
      placeholder={placeholder}
      p={10}
      focusBorderColor="blue700"
      onChangeText={onChangeText}
      m={5}
      suffix={<Icon name="search" color="gray900" fontFamily="Feather" />}
    />
  );
};

export default TextField;

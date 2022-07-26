import React from 'react';
import {Header as HD, Button, Icon, Text} from 'react-native-magnus';
import {trackButton} from '../../utils/trackTestID';

export interface Props {
  onPressLeft?: () => void;
  onPressRight?: () => void;
  title: string;
  testID: string;
}

const Header: React.FC<Props> = ({
  onPressLeft,
  onPressRight,
  title,
  testID,
}): JSX.Element => {
  return (
    <HD
      testID={testID}
      p="lg"
      borderBottomWidth={1}
      borderBottomColor="gray200"
      alignment="center"
      prefix={
        onPressLeft && (
          <Button
            testID={trackButton(testID, 'left')}
            bg="transparent"
            onPress={onPressLeft}>
            <Icon
              name="arrow-left"
              fontFamily="Feather"
              fontSize="3xl"
              color="gray900"
            />
          </Button>
        )
      }
      suffix={
        onPressRight && (
          <Button
            testID={trackButton(testID, 'right')}
            bg="transparent"
            onPress={onPressRight}>
            <Icon
              name="search"
              fontFamily="Feather"
              color="gray900"
              fontSize="3xl"
            />
          </Button>
        )
      }>
      <Text p={5} fontFamily="Manta Style Script DEMO" fontSize="6xl">
        {title}
      </Text>
    </HD>
  );
};

export default Header;

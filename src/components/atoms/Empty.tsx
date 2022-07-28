import React from 'react';
import {Div, Text} from 'react-native-magnus';

import {trackLabel} from '../../utils/trackTestID';

export interface Props {
  text: string;
  testID: string;
}

const Empty: React.FC<Props> = (props): JSX.Element => {
  const {text, testID} = props;

  return (
    <Div
      testID={testID}
      bg="white"
      p={15}
      m={15}
      rounded="md"
      h="100%"
      alignItems="center"
      justifyContent="center"
      shadow="sm">
      <Text
        fontSize="4xl"
        mt="md"
        color="gray700"
        testID={trackLabel(testID, 'text')}>
        {text}
      </Text>
    </Div>
  );
};

export default Empty;

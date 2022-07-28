import React from 'react';
import {Overlay, Text} from 'react-native-magnus';
import {Search} from '../molecules';
import {trackComponent} from '../../utils/trackTestID';

export interface Props {
  onPressGo: (term: string) => void;
  onPressCancel: () => void;
  title?: string;
  text?: string;
  testID: string;
  visible: boolean;
}

const Find: React.FC<Props> = ({
  onPressGo,
  onPressCancel,
  title,
  text,
  testID,
  visible,
}): JSX.Element => {
  const [open, setOpen] = React.useState<boolean>(visible);
  React.useEffect(() => {
    setOpen(visible);
  }, [visible]);
  return (
    <Overlay testID={text} visible={open}>
      {title && (
        <Text m={5} textAlign="center" fontSize={15} fontWeight="bold">
          {title}
        </Text>
      )}
      {text && (
        <Text m={5} textAlign="center">
          {text}
        </Text>
      )}
      <Search
        onPressCancel={() => {
          onPressCancel();
          setOpen(false);
        }}
        onPressGo={term => {
          onPressGo(term);
          setOpen(false);
        }}
        testID={trackComponent(testID, 'search')}
      />
    </Overlay>
  );
};

export default Find;

import React, {useState} from 'react';
import {Div} from 'react-native-magnus';
import {TextField, Button} from '../atoms';
import {trackButton, trackInput} from '../../utils/trackTestID';

export interface Props {
  onPressGo: (term: string) => void;
  onPressCancel: () => void;
  testID: string;
}

const Search: React.FC<Props> = ({
  onPressCancel,
  onPressGo,
  testID,
}): JSX.Element => {
  const [term, setTerm] = useState<string>('');
  return (
    <Div testID={testID}>
      <TextField onChangeText={setTerm} testID={trackInput(testID, 'search')} />
      <Div flexDir="row" justifyContent="space-around" m={5}>
        <Button
          text="Cancel"
          type="clean"
          testID={trackButton(testID, 'cancel')}
          onPress={onPressCancel}
        />
        <Button
          text="Search"
          type="go"
          testID={trackButton(testID, 'search')}
          onPress={() => onPressGo(term)}
        />
      </Div>
    </Div>
  );
};

export default Search;

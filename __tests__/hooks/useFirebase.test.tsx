import React from 'react';
import {renderHook} from '@testing-library/react-hooks';
import {Provider} from 'react-redux';
import {View} from 'react-native';
import {useFirebase} from '../../src/hooks';
import store from '../../src/store';

jest.mock('@react-native-firebase/remote-config', () => () => {
  return {
    fetchAndActivate: () => Promise.resolve(),
    setDefaults: (_data: any) => Promise.resolve(),
    _default: () => Promise.resolve(),
    getValue: () => 'apiKey',
  };
});

describe('Tests of useFirebase', () => {
  it('should configurate firebase tool and load the Environment Store', async () => {
    const wrapper = () => (
      <Provider store={store}>
        <View />
      </Provider>
    );
    // render(component);
    const testingLibraryReturn = renderHook(() => useFirebase(), {wrapper});
    const {result} = testingLibraryReturn;
    // expect(result.current.token).toEqual('');
    console.log(JSON.stringify(result.current));
    // await waitForNextUpdate();
  });
});

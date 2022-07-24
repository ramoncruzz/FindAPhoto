import React from 'react';
import {Provider} from 'react-redux';
import {render, screen, fireEvent} from '@testing-library/react-native';

import store from '../../../src/store';
import {Home} from '../../../src/pages';

describe('testing the Environment store', () => {
  it('should load the store', () => {
    const component = (
      <Provider store={store}>
        <Home />
      </Provider>
    );
    render(component);

    fireEvent.press(screen.getByTestId('btn'));
    const apiKey = store.getState().searchPhoto;
    console.log(JSON.stringify(apiKey));
  });
});

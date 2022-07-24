/**
 * @format
 */

import 'react-native';
import React from 'react';
import {Home} from '../src/pages';
import {Provider} from 'react-redux';
import {render} from '@testing-library/react-native';
import store from '../src/store';
// import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const redux = (
    <Provider store={store}>
      <Home />
    </Provider>
  );
  render(redux);
  // renderer.create(<Home />);
});

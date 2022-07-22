import React from 'react';
import RouterNavigation from '../src/routes';
import {Provider} from 'react-redux';

import rootStore from '../src/store';

const App: React.FC = () => {
  return (
    <>
      <Provider store={rootStore}>
        <RouterNavigation />
      </Provider>
    </>
  );
};
export default App;

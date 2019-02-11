import React from 'react';
import { Provider } from 'react-redux';
import { render  } from 'enzyme';

import App from '../App';
import store from '../store';


it('renders without crashing', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
});
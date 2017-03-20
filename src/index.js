'use strict';

import { Provider } from 'react-redux';
import React from 'react';
import { render } from 'react-dom';
import store from './redux/store';
import App from './components/app';

render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('app')
);

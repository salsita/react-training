import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';

import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import Root from 'modules/root/components/root';
import rootReducer from 'modules/root/root-reducer';

// configureStore enables the Redux DevTools by default
const store = configureStore({
  reducer: rootReducer
});

ReactDOM.render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.getElementById('root')
);

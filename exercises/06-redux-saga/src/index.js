import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';

import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';

import Root from 'modules/root/components/root';
import rootReducer from 'modules/root/root-reducer';
import rootSaga from 'modules/root/root-saga';

const sagaMiddleware = createSagaMiddleware();

// configureStore enables the Redux DevTools by default
const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware]
});

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.getElementById('root')
);

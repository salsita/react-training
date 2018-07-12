import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { buildStore } from '@salsita/react-core';
import { buildRouter } from '@salsita/react-router';

import Root from 'modules/root/components/root';
import rootReducer from 'modules/root/root-reducer';
import rootSaga from 'modules/root/root-saga';

import routes, { USERS_LIST } from 'modules/router/routes';

const router = buildRouter(routes, { defaultRoute: USERS_LIST });
const store = buildStore(rootReducer, rootSaga, router);

router.start(() => {
  ReactDOM.render(
    <Provider store={store}>
      <Root />
    </Provider>,
    document.getElementById('root')
  );
});

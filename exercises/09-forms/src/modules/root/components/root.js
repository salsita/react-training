import React from 'react';
import { Portal } from 'react-portal';

import { ApiErrorToast, ApiLoader } from '@salsita/react-api';
import { Route } from '@salsita/react-router';

import UsersRoute from 'modules/users/components/users-route';

import Header from './header';

const Root = () => (
  <div>
    <Header />
    <Route startsWith="users" component={UsersRoute} />
    <Portal>
      <ApiErrorToast />
      <ApiLoader />
    </Portal>
  </div>
);

export default Root;

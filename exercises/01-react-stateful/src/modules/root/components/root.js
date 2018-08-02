import React from 'react';

import UsersList from 'modules/users/components/users-list';

import Header from './header';

const Root = () => (
  <div>
    <Header title="User Management" />
    <UsersList />
  </div>
);

export default Root;

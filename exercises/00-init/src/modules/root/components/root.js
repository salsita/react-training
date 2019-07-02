import React from 'react';
import Header from './header.js'
import UsersList from './users-list'

const Root = () => (
  <div>
    <Header title="User Management" />
    <UsersList/>
  </div>
);

export default Root;

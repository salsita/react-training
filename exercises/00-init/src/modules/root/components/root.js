import React from 'react';
import { Header } from './Header';
import { UsersList } from './UsersList';

const Root = ({ title, users, addUser, children }) => (
  <div>
    <Header title={title}></Header>
    <UsersList users={users} children={children} addUser={addUser}></UsersList>
  </div>
);

export default Root;

import React from 'react';

import UsersList from 'modules/users/components/users-list';

import Header from './header';

const Root = ({ title, users, addUser }) => (
  <div>
    <Header title={title} />
    <UsersList users={users} addUser={addUser} />
  </div>
);

Root.propTypes = {
  title: Header.propTypes.title,
  users: UsersList.propTypes.users,
  addUser: UsersList.propTypes.addUser
};

export default Root;

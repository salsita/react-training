import React from 'react';
import Header from './header.js'
import UsersList from './users-list'

const Root = (props) => (
  <div>
    <Header title={props.title} />
    <UsersList users={props.users} addUser={props.addUser}/>
  </div>
);

export default Root;

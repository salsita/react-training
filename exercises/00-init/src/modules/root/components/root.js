import React from 'react';
import Header from './header.js'
import UsersList from './users-list'
import PropTypes from 'prop-types';

const Root = (props) => (
  <div>
    <Header title={props.title} />
    <UsersList users={props.users} addUser={props.addUser}/>
  </div>
);

Root.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      firstName: PropTypes.string,
      lastName: PropTypes.string
  })),
  addUser: PropTypes.func,
  title: PropTypes.string,
}

export default Root;

import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import { UsersActions } from 'modules/users/users-slice';

const UsersList = ({ users, addUser }) => (
  <div>
    <div>
      <button onClick={() => addUser({ firstName: 'Arya', lastName: 'Stark' })}>Add No One</button>
      <button onClick={() => addUser({ firstName: 'Daenerys', lastName: 'Targaryen' })}>Add Mother of Dragons</button>
    </div>
    <table>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
        </tr>
      </thead>
      <tbody>
        {!users.length && (
          <tr colSpan="2">
            <td>No Users</td>
          </tr>
        )}
        {users.map(({ id, firstName, lastName }) => (
          <tr key={id}>
            <td>{firstName}</td>
            <td>{lastName}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

UsersList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  addUser: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  users: state.users.users
});

const mapDispatchToProps = {
  addUser: UsersActions.addUser
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersList);

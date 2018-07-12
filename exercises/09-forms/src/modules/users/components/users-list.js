import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import { Link } from '@salsita/react-router';

import { USER_CREATE, USER_DETAIL } from 'modules/router/routes';

import * as UsersSelectors from 'modules/users/users-selectors';

const UsersList = ({ users }) => (
  <div>
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
        {users.map(({ id, firstName, lastName, regnalNumber }) => (
          <tr key={id}>
            <td>
              <Link name={USER_DETAIL} params={{ id }}>
                {firstName} {regnalNumber}
              </Link>
            </td>
            <td>{lastName}</td>
          </tr>
        ))}
      </tbody>
    </table>
    <Link name={USER_CREATE}>Add user</Link>
  </div>
);

UsersList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
      regnalNumber: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
};

const mapStateToProps = state => ({
  users: UsersSelectors.getUsersList(state)
});

export default connect(mapStateToProps)(UsersList);

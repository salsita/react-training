import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Link from "modules/routing/components/link";
import { USER_CREATE, USER_DETAIL } from "modules/routing/routes";
import { getUsersList } from "modules/crud/crud-selectors";

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
        {users.map(({ id, firstName, lastName }) => (
          <tr key={id}>
            <td>
              <Link name={USER_DETAIL} params={{ id }}>
                {firstName}
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
      lastName: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
};

const mapStateToProps = state => ({
  users: getUsersList(state)
});

export default connect(mapStateToProps)(UsersList);

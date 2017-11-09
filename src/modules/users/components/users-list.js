import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Link from "modules/routing/components/link";
import { USER_CREATE, USER_DETAIL } from "modules/routing/routes";
import { getUsersList } from "modules/crud/crud-selectors";

import {
  StyledLink,
  Table,
  TableRow,
  TableData,
  TableHead
} from "./../../../styles";

const UsersList = ({ users }) => (
  <div>
    <Table>
      <thead>
        <TableRow>
          <TableHead>First Name</TableHead>
          <TableHead>Last Name</TableHead>
        </TableRow>
      </thead>
      <tbody>
        {users.map(({ id, firstName, lastName }) => (
          <TableRow key={id}>
            <TableData>
              <Link name={USER_DETAIL} params={{ id }}>
                {firstName}
              </Link>
            </TableData>
            <TableData>{lastName}</TableData>
          </TableRow>
        ))}
      </tbody>
    </Table>
    <StyledLink name={USER_CREATE}>Add user</StyledLink>
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

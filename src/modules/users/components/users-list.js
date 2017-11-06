import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Link from "modules/routing/components/link";
import { USER_CREATE, USER_DETAIL } from "modules/routing/routes";
import { getUsersList } from "modules/crud/crud-selectors";

import styled from "styled-components";
import { colors, space } from "./../../../styles";

const Table = styled.table`
  border: none;
  border-collapse: collapse;
  margin-bottom: ${space[2]};
  width: 100%;
`;

const TableRow = styled.tr`
  border-bottom: 1px solid ${colors.lightgrey};
  height: ${space[4]};
`;

const TableData = styled.td`
  height: ${space[4]};
  padding-left: ${space[2]};
  padding-right: ${space[2]};
  width: ${space[2]};
`;

const TableHead = TableData.extend`
  border-bottom: 1px solid ${colors.lightgrey};
  font-weight: bold;
  height: ${space[4]};
`;

const StyledLink = styled(Link)`
  background-color: ${colors.blue};
  border-radius: 2px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px;
  box-sizing: border-box;
  color: ${colors.white};
  cursor: pointer;
  display: inline-block;
  font-weight: 500;
  height: ${space[3]};
  line-height: ${space[3]};
  margin: ${space[0]} 0;
  outline: none;
  padding: 0 ${space[1]};
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #00daf6;
  }
`;

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

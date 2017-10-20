import React from "react";
import PropTypes from "prop-types";
import { Portal } from "react-portal";
import { connect } from "react-redux";
import { endsWithSegment } from "router5-helpers";

import UsersList from "modules/users/components/users-list";
import UserDetail from "modules/users/components/user-detail";
import UserCreate from "modules/users/components/user-create";

const UserRoute = ({ route: { name } }) => {
  const endsWith = endsWithSegment(name);

  if (endsWith("detail")) {
    return <UserDetail />;
  } else {
    return [
      <UsersList key="user-list" />,
      endsWith("create") && (
        <Portal key="user-create">
          <UserCreate />
        </Portal>
      )
    ].filter(Boolean);
  }
};

UserRoute.propTypes = {
  route: PropTypes.shape({
    name: PropTypes.string.isRequired
  }).isRequired
};

const mapStateToProps = state => ({
  route: state.router.route
});

export default connect(mapStateToProps)(UserRoute);

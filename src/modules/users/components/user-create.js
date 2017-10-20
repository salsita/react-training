import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Actions from "modules/users/users-actions";
import UserForm from "modules/users/components/user-form";

const UserCreate = ({ saveUser }) => <UserForm onSubmit={saveUser} />;

UserCreate.propTypes = {
  saveUser: PropTypes.func.isRequired
};

const mapDispatchToProps = {
  saveUser: Actions.Creators.saveUser
};

export default connect(null, mapDispatchToProps)(UserCreate);

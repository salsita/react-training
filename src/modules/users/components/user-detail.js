import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Actions from "modules/users/users-actions";
import UserForm from "modules/users/components/user-form";
import { getUserDetail } from "modules/crud/crud-selectors";

const UserDetail = ({ userDetail, saveUser }) => (
  <UserForm initialValues={userDetail} onSubmit={saveUser} />
);

UserDetail.propTypes = {
  userDetail: PropTypes.object.isRequired,
  saveUser: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  userDetail: getUserDetail(state)
});

const mapDispatchToProps = {
  saveUser: Actions.Creators.saveUser
};

export default connect(mapStateToProps, mapDispatchToProps)(UserDetail);

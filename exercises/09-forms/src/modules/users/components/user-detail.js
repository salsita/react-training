import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { UsersSagaActions } from 'modules/users/users-saga';
import UserForm from 'modules/users/components/user-form';

import * as UsersSelectors from 'modules/users/users-selectors';

const UserDetail = ({ userDetail, saveUser }) => {
  if (!userDetail) {
    return 'Loading...';
  }

  return <UserForm initialValues={userDetail} onSubmit={saveUser} />;
};

UserDetail.propTypes = {
  userDetail: PropTypes.object,
  saveUser: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  userDetail: UsersSelectors.getUserDetail(state)
});

const mapDispatchToProps = dispatch => ({
  saveUser: user => dispatch(UsersSagaActions.saveUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserDetail);

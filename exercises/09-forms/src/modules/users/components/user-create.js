import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { UsersActions } from 'modules/users/users-slice';
import UserForm from 'modules/users/components/user-form';

const UserCreate = ({ saveUser }) => <UserForm onSubmit={saveUser} />;

UserCreate.propTypes = {
  saveUser: PropTypes.func.isRequired
};

const mapDispatchToProps = {
  saveUser: UsersActions.saveUser
};

export default connect(null, mapDispatchToProps)(UserCreate);

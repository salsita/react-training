import { createReducer } from 'reduxsauce';

import UsersActions from 'modules/users/users-actions';

const INITIAL_STATE = {
  title: 'User Management',
  users: []
};

const usersLoaded = (state, { users }) => ({
  ...state,
  users
});

const HANDLERS = {
  [UsersActions.Types.USERS_LOADED]: usersLoaded
};

export default createReducer(INITIAL_STATE, HANDLERS);

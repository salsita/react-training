import { createReducer } from 'reduxsauce';

import UsersActions from 'modules/users/users-actions';

const INITIAL_STATE = {
  title: 'React is the best',
  users: []
};

const addUser = (state, { user }) => ({
  ...state,
  users: [
    ...state.users,
    {
      id: state.users.length + 1,
      ...user
    }
  ]
});

const HANDLERS = {
  [UsersActions.Types.ADD_USER]: addUser
};

export default createReducer(INITIAL_STATE, HANDLERS);

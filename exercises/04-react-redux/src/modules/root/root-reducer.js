import { combineReducers } from 'redux';

import { usersReducer } from 'modules/users/users-slice';

export default combineReducers({
  users: usersReducer
});

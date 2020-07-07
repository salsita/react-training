import { combineReducers } from "redux";

import { usersReducer as users } from "modules/users/users-slice";

export default combineReducers({
  users,
});

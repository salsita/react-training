import { combineReducers } from 'redux';

import { entitiesReducer as entities } from '@salsita/react-entities';
import { usersReducer } from 'modules/users/users-slice';

export default combineReducers({
  entities,
  users: usersReducer
});

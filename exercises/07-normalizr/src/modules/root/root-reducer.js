import { combineReducers } from 'redux';

import { entitiesReducer as entities } from '@salsita/react-entities';
import users from 'modules/users/users-reducer';

export default combineReducers({
  entities,
  users
});

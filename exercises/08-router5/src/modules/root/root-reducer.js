import { combineReducers } from 'redux';

import { apiReducer as api } from '@salsita/react-api';
import { crudReducer as crud } from '@salsita/react-crud';
import { entitiesReducer as entities } from '@salsita/react-entities';
import { routerReducer as router } from '@salsita/react-router';

import { usersReducer } from 'modules/users/users-slice';

export default combineReducers({
  api,
  crud,
  entities,
  router,
  users: usersReducer
});

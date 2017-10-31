import { combineReducers } from "redux";

import api from "modules/api/api-reducer";
import router from "modules/routing/routing-reducer";
import entityRepository from "modules/entity-repository/entity-repository-reducer";
import crud from "modules/crud/crud-reducer";
import form from "modules/forms/forms-reducer";

export default combineReducers({
  api,
  router,
  entityRepository,
  crud,
  form
});

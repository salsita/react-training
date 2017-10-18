import { combineReducers } from "redux";

import router from "modules/routing/routing-reducer";
import entityRepository from "modules/entity-repository/entity-repository-reducer";

export default combineReducers({
  router,
  entityRepository
});

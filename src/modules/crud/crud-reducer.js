import { createReducer } from "reduxsauce";

import Actions from "modules/crud/crud-actions";

const INITIAL_STATE = {};

const entitiesFetched = (state, { route, result }) => ({
  ...state,
  [route]: result
});

export const HANDLERS = {
  [Actions.Types.ENTITIES_FETCHED]: entitiesFetched
};

export default createReducer(INITIAL_STATE, HANDLERS);

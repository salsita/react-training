import { createReducer } from "reduxsauce";

import Actions from "modules/crud/crud-actions";

const INITIAL_STATE = {};

const entitiesFetched = (state, { route, index, result }) => ({
  ...state,
  [route]: {
    ...(state[route] || {}),
    [index]: result
  }
});

export const HANDLERS = {
  [Actions.Types.ENTITIES_FETCHED]: entitiesFetched
};

export default createReducer(INITIAL_STATE, HANDLERS);

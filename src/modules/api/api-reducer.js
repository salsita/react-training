import { createReducer } from "reduxsauce";

import Actions from "modules/api/api-actions";

const INITIAL_STATE = {
  error: null
};

const apiError = (state, { errorType, errorReason }) => ({
  ...state,
  error: { errorType, errorReason }
});

export const HANDLERS = {
  [Actions.Types.API_ERROR]: apiError
};

export default createReducer(INITIAL_STATE, HANDLERS);

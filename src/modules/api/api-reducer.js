import { createReducer } from "reduxsauce";

import Actions from "modules/api/api-actions";

const INITIAL_STATE = {
  callsInProgress: 0,
  error: null
};

const apiError = (state, { errorType, errorReason }) => ({
  ...state,
  error: { errorType, errorReason }
});

const startLoading = state => ({
  ...state,
  callsInProgress: state.callsInProgress + 1
});

const stopLoading = state => ({
  ...state,
  callsInProgress: state.callsInProgress - 1
});

export const HANDLERS = {
  [Actions.Types.API_ERROR]: apiError,
  [Actions.Types.START_LOADING]: startLoading,
  [Actions.Types.STOP_LOADING]: stopLoading
};

export default createReducer(INITIAL_STATE, HANDLERS);

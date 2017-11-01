import { createSelector } from "reselect";

import { getApi as getState } from "modules/root/root-selectors";

export const getError = createSelector(
  getState,
  state => (state.error ? state.error.errorType : null)
);

export const isLoading = createSelector(
  getState,
  state => state.callsInProgress > 0
);

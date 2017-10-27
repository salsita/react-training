import { createSelector } from "reselect";

import { getRouter as getState } from "modules/root/root-selectors";

export const getCurrentRoute = createSelector(getState, state => state.route);

export const getRouteParams = createSelector(
  getCurrentRoute,
  route => route && route.params
);

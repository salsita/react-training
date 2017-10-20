import { createSelector } from "reselect";

import { getCrud as getState } from "modules/root/root-selectors";
import { USER_DETAIL, USERS_LIST } from "modules/routing/routes";
import * as EntityRepositorySelectors from "modules/entity-repository/entity-repository-selectors";

export const hasUsersList = createSelector(getState, state =>
  Boolean(state[USERS_LIST])
);

export const getUsersList = createSelector(
  getState,
  EntityRepositorySelectors.getUsers,
  hasUsersList,
  (state, users, usersListExists) =>
    usersListExists ? state[USERS_LIST].map(userId => users[userId]) : []
);

export const hasUserDetail = createSelector(getState, state =>
  Boolean(state[USER_DETAIL])
);

export const getUserDetail = createSelector(
  getState,
  EntityRepositorySelectors.getUsers,
  hasUserDetail,
  (state, users, userDetailExists) =>
    userDetailExists ? users[state[USER_DETAIL]] : {}
);

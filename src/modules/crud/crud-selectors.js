import { createSelector } from "reselect";

import { getCrud as getState } from "modules/root/root-selectors";
import { USER_DETAIL, USERS_LIST } from "modules/routing/routes";
import * as EntityRepositorySelectors from "modules/entity-repository/entity-repository-selectors";

export const hasUsersList = createSelector(
  getState,
  state => Boolean(state[USERS_LIST]) && Boolean(state[USERS_LIST][0])
);

export const getUsersList = createSelector(
  getState,
  EntityRepositorySelectors.getUsers,
  hasUsersList,
  (state, users, usersListExists) =>
    usersListExists ? state[USERS_LIST][0].map(userId => users[userId]) : []
);

export const hasUserDetail = createSelector(
  getState,
  state => Boolean(state[USER_DETAIL]) && Boolean(state[USER_DETAIL][0])
);

export const getUserDetail = createSelector(
  getState,
  EntityRepositorySelectors.getUsers,
  hasUserDetail,
  (state, users, userDetailExists) =>
    userDetailExists ? users[state[USER_DETAIL][0]] : {}
);

const hasSkills = createSelector(
  getState,
  state => Boolean(state[USERS_LIST]) && Boolean(state[USERS_LIST][1])
);

export const getSkills = createSelector(
  getState,
  EntityRepositorySelectors.getSkills,
  hasSkills,
  (state, skills, skillsListExists) =>
    skillsListExists ? state[USERS_LIST][1].map(skillId => skills[skillId]) : []
);

import { createSelector } from 'reselect';

import { RootSelectors } from '@salsita/react-core';

import * as EntitiesSelectors from 'modules/entities/entities-selectors';
import { USER_DETAIL, USERS_LIST } from 'modules/router/routes';

export const hasUsersList = createSelector(
  RootSelectors.getCrud,
  state => Boolean(state[USERS_LIST]) && Boolean(state[USERS_LIST].users)
);

export const getUsersList = createSelector(
  RootSelectors.getCrud,
  EntitiesSelectors.getUsers,
  hasUsersList,
  (state, users, usersListExists) =>
    usersListExists ? state[USERS_LIST].users.map(userId => users[userId]) : []
);

export const hasUserDetail = createSelector(
  RootSelectors.getCrud,
  state => Boolean(state[USER_DETAIL]) && Boolean(state[USER_DETAIL].user)
);

export const getUserDetail = createSelector(
  RootSelectors.getCrud,
  EntitiesSelectors.getUsers,
  hasUserDetail,
  (state, users, userDetailExists) =>
    userDetailExists ? users[state[USER_DETAIL].user] : null
);

const hasSkills = createSelector(
  RootSelectors.getCrud,
  state => Boolean(state[USERS_LIST]) && Boolean(state[USERS_LIST].skills)
);

export const getSkills = createSelector(
  RootSelectors.getCrud,
  EntitiesSelectors.getSkills,
  hasSkills,
  (state, skills, skillsListExists) =>
    skillsListExists
      ? state[USERS_LIST].skills.map(skillId => skills[skillId])
      : []
);

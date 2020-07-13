import { createSelector } from 'reselect';
import { toRoman } from 'roman-numerals';

import * as EntityRepositorySelectors from 'modules/entities/entities-selectors';

const getState = state => state.users;

export const getTitle = createSelector(getState, state => state.title);

export const getUserIds = createSelector(getState, state => state.userIds);

const getUsers = createSelector(
  getUserIds,
  EntityRepositorySelectors.getUsers,
  (userIds, userEntities) => userIds.map(userId => userEntities[userId])
);

export const getUsersList = createSelector(getUsers, users =>
  users.map(user => ({
    ...user,
    lastName: user.lastName.toUpperCase(),
    regnalNumber: toRoman(user.regnalNumber)
  }))
);

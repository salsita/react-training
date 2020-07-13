import { createSelector } from 'reselect';
import { toRoman } from 'roman-numerals';

import * as CrudSelectors from 'modules/crud/crud-selectors';

const getState = state => state.users;

export const getTitle = createSelector(getState, state => state.title);

const enhanceUser = user => ({
  ...user,
  lastName: user.lastName.toUpperCase(),
  regnalNumber: toRoman(user.regnalNumber)
});

export const getUsersList = createSelector(CrudSelectors.getUsersList, users =>
  users.map(enhanceUser)
);

export const getUserDetail = createSelector(
  CrudSelectors.getUserDetail,
  user => user && enhanceUser(user)
);

import { createSelector } from 'reselect';
import { toRoman } from 'roman-numerals';
import flow from 'lodash.flow';

import * as CrudSelectors from 'modules/crud/crud-selectors';

const getState = state => state.users;

export const getTitle = createSelector(getState, state => state.title);

const convertUserRegnalNumber = user => ({
  ...user,
  regnalNumber: toRoman(user.regnalNumber)
});

const convertUserLastName = user => ({
  ...user,
  lastName: user.lastName.toUpperCase()
});

const convertUser = flow([convertUserLastName, convertUserRegnalNumber]);

export const getUsersList = createSelector(CrudSelectors.getUsersList, users =>
  users.map(convertUser)
);

export const getUserDetail = createSelector(
  CrudSelectors.getUserDetail,
  user => user && convertUserRegnalNumber(user)
);

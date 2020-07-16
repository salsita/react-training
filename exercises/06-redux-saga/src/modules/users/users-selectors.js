import { createSelector } from 'reselect';

const getState = state => state.users;

export const getTitle = createSelector(
  getState,
  state => state.title
);

const getUsers = createSelector(
  getState,
  state => state.users
);

export const getUsersList = createSelector(
  getUsers,
  users => users.map(user => ({
    ...user,
    lastName: user.lastName.toUpperCase()
  }))
);

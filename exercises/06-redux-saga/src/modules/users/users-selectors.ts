import { createSelector } from 'reselect'

import { RootState } from 'modules/root/root-reducer'
import { User } from './user-types'

const getState = (state: RootState) => state.users

export const getTitle = createSelector(getState, (state) => state.title)

const getUsers = createSelector(getState, (state) => state.users)

const withUpperCaseLastName = (user: User) => ({
  ...user,
  lastName: user.lastName.toUpperCase(),
})

export const getUserList = createSelector(getUsers, (users) =>
  users.map(withUpperCaseLastName)
)

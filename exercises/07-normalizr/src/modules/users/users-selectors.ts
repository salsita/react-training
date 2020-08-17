import { createSelector } from 'reselect'
import { toRoman } from 'roman-numerals'

import { RootState } from 'modules/root/root-reducer'
import { getUserEntities } from 'modules/entities/entities-selectors'
import { User } from './user-types'

const getState = (state: RootState) => state.users

export const getTitle = createSelector(getState, (state) => state.title)

export const getUserIds = createSelector(getState, (state) => state.userIds)

const getUsers = createSelector(
  getUserIds,
  getUserEntities,
  (userIds, userEntities) =>
    userIds.map((userId: string) => userEntities[userId])
)

const withUpperCaseLastName = (user: User) => ({
  ...user,
  lastName: user.lastName.toUpperCase(),
})

export const getUserList = createSelector(getUsers, (users) =>
  users.map(withUpperCaseLastName)
)

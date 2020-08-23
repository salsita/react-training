import { all, call, fork, put, takeEvery } from 'redux-saga/effects'
import { AxiosResponse } from 'axios'

import * as Schema from 'modules/entities/entities-schema'
import * as EntitiesTypes from 'modules/entities/entities-types'

import { usersActions } from 'modules/users/users-slice'
import * as UsersEffects from 'modules/users/users-effects'
import { normalizeAndStore } from 'modules/entities/entities-saga'
import { User } from './user-types'

const logError = (error: unknown) => {
  if (error instanceof Error) {
    console.log(error.message)
  } else {
    console.log(error)
  }
}

function* getUsers() {
  let normalizedUsers: EntitiesTypes.UserIds = []

  try {
    const { data: users }: AxiosResponse<User[]> = yield call(
      UsersEffects.getUsers
    )

    normalizedUsers = yield normalizeAndStore<
      EntitiesTypes.User[],
      EntitiesTypes.UserEntities,
      EntitiesTypes.UserIds
    >(users, Schema.users)

    yield put(usersActions.usersLoaded(normalizedUsers))
  } catch (error) {
    logError(error)
    return
  }

  yield put(usersActions.usersLoaded(normalizedUsers))
}

function* addUser(action: ReturnType<typeof usersActions.addUser>) {
  const { payload: user } = action
  try {
    yield call(UsersEffects.addUser, user)
  } catch (error) {
    logError(error)
    return
  }

  yield fork(getUsers)
}

export function* usersSaga() {
  yield fork(getUsers)

  yield all([takeEvery(usersActions.addUser, addUser)])
}

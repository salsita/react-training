import { all, call, fork, put, takeEvery } from 'redux-saga/effects'
import { AxiosResponse } from 'axios'
import { normalize } from 'normalizr'

import * as Schema from 'modules/entities/entities-schema'
import * as EntitiesTypes from 'modules/entities/entities-types'

import { usersActions } from 'modules/users/users-slice'
import * as UsersEffects from 'modules/users/users-effects'
import { User } from './user-types'

function* getUsers() {
  try {
    const { data: users }: AxiosResponse<User[]> = yield call(
      UsersEffects.getUsers
    )

    const normalizedUsers = normalize<
      User[],
      EntitiesTypes.UserEntities,
      EntitiesTypes.UserIds
    >(users, Schema.users)

    yield put(usersActions.usersLoaded(normalizedUsers))
  } catch (error) {
    console.log(error.message)
  }
}

function* addUser(action: ReturnType<typeof usersActions.addUser>) {
  const { payload: user } = action
  try {
    const response: AxiosResponse<User> = yield call(UsersEffects.addUser, user)

    if (response) {
      yield fork(getUsers)
    }
  } catch (error) {
    console.log(error.message)
  }
}

export function* usersSaga() {
  yield fork(getUsers)

  yield all([takeEvery(usersActions.addUser, addUser)])
}

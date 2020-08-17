import { all, call, fork, put, takeEvery } from 'redux-saga/effects'
import { Action } from 'redux'
import { normalize } from 'normalizr'

import * as Schema from 'modules/entities/entities-schema'
import * as EntitiesTypes from 'modules/entities/entities-types'

import { usersActions } from 'modules/users/users-slice'
import * as UsersEffects from 'modules/users/users-effects'
import { User } from './user-types'

function* getUsers() {
  try {
    const { data } = yield call(UsersEffects.getUsers)

    const normalizedUsers = normalize<
      User[],
      EntitiesTypes.UserEntities,
      EntitiesTypes.UserIds
    >(data, Schema.users)

    yield put(usersActions.usersLoaded(normalizedUsers))
  } catch (error) {
    console.log(error.message)
  }
}

function* addUser(action: Action) {
  if (!usersActions.addUser.match(action)) {
    console.error(
      'Unexpected type',
      `'${action.type}'`,
      'was passed to addUser saga.'
    )
    return
  }

  const { payload: user } = action
  try {
    const response = yield call(UsersEffects.addUser, user)

    if (response) {
      yield fork(getUsers)
    }
  } catch (error) {
    console.log(error.message)
  }
}

export function* usersSaga() {
  yield fork(getUsers)

  yield all([takeEvery(usersActions.addUser.type, addUser)])
}

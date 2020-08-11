import { all, call, fork, put, takeEvery } from 'redux-saga/effects'
import { Action } from 'redux'
import { normalize } from 'normalizr'

import * as Schema from 'modules/entities/entities-schema'

import { usersActions } from 'modules/users/users-slice'
import { entitiesActions } from 'modules/entities/entities-slice'
import * as UsersEffects from 'modules/users/users-effects'
import { User } from './user-types'

function* getUsers() {
  try {
    const { data } = yield call(UsersEffects.getUsers)

    const users = normalize<User[], Schema.UserEntities, Schema.UserIds>(
      data,
      Schema.users
    )

    yield put(entitiesActions.entitiesLoaded(users.entities))
    yield put(usersActions.usersLoaded(users.result))
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

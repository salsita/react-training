import { all, call, fork, put, takeEvery } from 'redux-saga/effects';

import { normalizeAndStore } from '@salsita/react-entities';

import * as Schema from 'modules/entities/entities-schema';

import { UsersActions } from 'modules/users/users-slice';
import * as UsersEffects from 'modules/users/users-effects';

function* getUsers() {
  try {
    const { data: users } = yield call(UsersEffects.getUsers);

    const result = yield call(normalizeAndStore, users, Schema.users);

    yield put(UsersActions.usersLoaded(result));
  } catch (error) {
    console.log(error.message);
  }
}

function* addUser({ payload: user }) {
  try {
    const response = yield call(UsersEffects.addUser, user);

    if (response) {
      yield fork(getUsers);
    }
  } catch (error) {
    console.log(error.message);
  }
}

export default function* usersSaga() {
  yield fork(getUsers);

  yield all([takeEvery(UsersActions.addUser.type, addUser)]);
}

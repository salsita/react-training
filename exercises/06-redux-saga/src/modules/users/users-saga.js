import { all, call, fork, put, takeEvery } from 'redux-saga/effects';

import { UsersActions } from 'modules/users/users-slice';
import * as UsersEffects from 'modules/users/users-effects';

function* getUsers() {
  try {
    const { data: users } = yield call(UsersEffects.getUsers);
    yield put(UsersActions.usersLoaded(users));
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

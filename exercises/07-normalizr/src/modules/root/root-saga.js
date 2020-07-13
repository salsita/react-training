import { all, fork } from 'redux-saga/effects';

import usersSaga from 'modules/users/users-saga';

export default function* () {
  yield all([fork(usersSaga)]);
}

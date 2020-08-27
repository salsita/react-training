import { all, fork } from 'redux-saga/effects'

import { usersSaga } from 'modules/users/users-saga'

export function* rootSaga() {
  yield all([fork(usersSaga)])
}

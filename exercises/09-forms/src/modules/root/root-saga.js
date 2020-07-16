import { all, fork } from 'redux-saga/effects';

import { crudSaga } from '@salsita/react-crud';

import { mapRouteToFetchParams } from 'modules/crud/crud-saga';
import usersSaga from 'modules/users/users-saga';

export default function*() {
  yield all([
    fork(crudSaga, mapRouteToFetchParams),
    fork(usersSaga)
  ]);
}

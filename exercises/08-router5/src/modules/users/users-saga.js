import { all, call, takeEvery } from 'redux-saga/effects';

import { saveEntity, fetchEntities } from '@salsita/react-crud';

import * as Entities from 'modules/crud/crud-entities';
import { mapEntityToSaveParams, mapRouteToFetchParams } from 'modules/crud/crud-saga';

import { USERS_LIST } from 'modules/router/routes';
import UsersActions from 'modules/users/users-actions';

function* addUser({ user }) {
  const entity = yield call(saveEntity, user, Entities.USER, mapEntityToSaveParams);

  if (entity) {
    yield call(fetchEntities, USERS_LIST, mapRouteToFetchParams);
  }
}

export default function* usersSaga() {
  yield all([takeEvery(UsersActions.Types.ADD_USER, addUser)]);
}

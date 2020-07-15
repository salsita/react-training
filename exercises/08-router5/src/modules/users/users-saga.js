import { all, call, takeEvery } from 'redux-saga/effects';
import { createAction } from '@reduxjs/toolkit';

import { saveEntity, fetchEntities } from '@salsita/react-crud';

import * as Entities from 'modules/crud/crud-entities';
import { mapEntityToSaveParams, mapRouteToFetchParams } from 'modules/crud/crud-saga';

import { USERS_LIST } from 'modules/router/routes';

export const UsersSagaActions = {
  addUser: createAction('users/saga/addUser')
}

function* addUser({ payload: user }) {
  const entity = yield call(saveEntity, user, Entities.USER, mapEntityToSaveParams);

  if (entity) {
    yield call(fetchEntities, USERS_LIST, mapRouteToFetchParams);
  }
}

export default function* usersSaga() {
  yield all([takeEvery(UsersSagaActions.addUser.type, addUser)]);
}

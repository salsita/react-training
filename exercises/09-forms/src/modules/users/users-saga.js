import { all, call, put, takeEvery } from 'redux-saga/effects';

import { saveEntity, fetchEntities } from '@salsita/react-crud';
import { RouterActions } from '@salsita/react-router';

import * as Entities from 'modules/crud/crud-entities';
import {
  mapEntityToSaveParams,
  mapRouteToFetchParams
} from 'modules/crud/crud-saga';

import { USERS_LIST } from 'modules/router/routes';

import { USER_FORM_NAME } from 'modules/users/components/user-form';
import UsersActions from 'modules/users/users-actions';

function* saveUser({ user }) {
  const entity = yield call(
    saveEntity,
    user,
    Entities.USER,
    mapEntityToSaveParams,
    USER_FORM_NAME
  );

  if (entity) {
    yield put(RouterActions.Creators.navigateTo(USERS_LIST));
    yield call(fetchEntities, USERS_LIST, mapRouteToFetchParams);
  }
}

export default function* usersSaga() {
  yield all([takeEvery(UsersActions.Types.SAVE_USER, saveUser)]);
}

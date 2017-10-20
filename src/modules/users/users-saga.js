import { all, call, put, takeEvery } from "redux-saga/effects";
import { actions as routerActions } from "redux-router5";

import Actions from "modules/users/users-actions";
import * as Entities from "modules/crud/crud-entities";
import { saveEntity, fetchEntities } from "modules/crud/crud-saga";
import { USERS_LIST } from "modules/routing/routes";
import { USER_FORM_NAME } from "modules/users/components/user-form";

function* saveUser({ user }) {
  const entity = yield call(saveEntity, user, Entities.USER, USER_FORM_NAME);

  if (entity) {
    yield put(routerActions.navigateTo(USERS_LIST));
    yield call(fetchEntities, USERS_LIST);
  }
}

export default function* usersSaga() {
  yield all([takeEvery(Actions.Types.SAVE_USER, saveUser)]);
}

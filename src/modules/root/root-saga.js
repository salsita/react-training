import { all, fork } from "redux-saga/effects";

import crudSaga from "modules/crud/crud-saga";

export default function*() {
  yield all([fork(crudSaga)]);
}

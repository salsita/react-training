import { call, put } from "redux-saga/effects";

import Actions from "modules/api/api-actions";
import { ApiError } from "modules/api/api-errors";

export function* withErrorHandling(saga, ...args) {
  try {
    return yield call(saga, ...args);
  } catch (exception) {
    if (exception instanceof ApiError) {
      console.error(exception);

      yield put(
        Actions.Creators.apiError(exception.getType(), exception.getReason())
      );
    } else {
      throw exception;
    }
  }
}

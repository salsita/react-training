import { call, put } from "redux-saga/effects";

import Actions from "modules/api/api-actions";
import { ApiError } from "modules/api/api-errors";

/**
 * Wraps saga into try/catch block catching all the ApiErrors
 * and translating them to API_ERROR actions.
 *
 * @param {Function*} API call saga which may throw ApiError 
 * @param {...Any} arguments to be passed to the saga 
 */
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

/**
 * Wraps saga into start/stop loading actions
 *
 * @param {Function*} long running saga
 * @param {...Any} arguments to be passed to the saga
 */
export function* withLoadingIndicator(saga, ...args) {
  try {
    yield put(Actions.Creators.startLoading());
    return yield call(saga, ...args);
  } finally {
    yield put(Actions.Creators.stopLoading());
  }
}

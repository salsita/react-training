import { call, put, select } from "redux-saga/effects";

import identityFn from "helpers/identity-fn";
import Actions from "modules/crud/crud-actions";
import { normalizeAndStore } from "modules/entity-repository/entity-repository-saga";

/**
 * Returns effect & schema pair which will be used for fetching & normalizing the entity based on provided route.
 * @param {String} Route
 * @param {Object} Entire application state - so that effect can be parameterized if necessary
 *
 * @returns {Object} Object containing effect to be executed and schema for normalizing the result
 */
const mapRouteToFetchParams = (route, state) => {
  switch (route) {
    default:
      return null;
  }
};

/**
 * Fetches CRUD entity/ies based on provided route.
 * Fetched entity/ies is/are automatically normalized and
 * reference to it stored in the app state
 */
export function* fetchEntities(route) {
  const state = yield select(identityFn);
  const fetchParams = mapRouteToFetchParams(route, state);

  // Some routes might not have CRUD fetching defined
  // We'll skip these
  if (fetchParams) {
    const { effect, schema } = fetchParams;

    // Just call the effect
    const data = yield effect;

    // Normalize the response
    const result = yield call(normalizeAndStore, data, schema);

    // And store the result
    yield put(Actions.Creators.entitiesFetched(route, result));
  }
}

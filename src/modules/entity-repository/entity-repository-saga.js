import { normalize } from "normalizr";
import { put } from "redux-saga/effects";

import Actions from "modules/entity-repository/entity-repository-actions";

/**
 * Normalizes data according to schema and stores
 * the result inside entity repository.
 *
 * @param {Object|Array} data Entity or list of entities
 * @param {Object|Array} schema Normalizr schema
 * @return {String|Number|Array} Returns either ID or list of IDs of normalized data
 */
export function* normalizeAndStore(data, schema) {
  const { entities: repository, result } = normalize(data, schema);
  yield put(Actions.Creators.repositoryHasChanged(repository));
  return result;
}

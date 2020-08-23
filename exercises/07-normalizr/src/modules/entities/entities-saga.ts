import { put } from 'redux-saga/effects'
import { normalize, Schema } from 'normalizr'

import { entitiesActions } from 'modules/entities/entities-slice'

export function* normalizeAndStore<
  T = any,
  E = { [key: string]: { [key: string]: T } | undefined },
  R = any
>(data: any, schema: Schema<T>) {
  const { entities, result } = normalize<T, E, R>(data, schema)
  yield put(entitiesActions.entitiesUpdated(entities))

  return result
}

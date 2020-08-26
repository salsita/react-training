import { put } from 'redux-saga/effects'
import { normalize, Schema } from 'normalizr'

import { entitiesActions } from 'modules/entities/entities-slice'

export function* normalizeAndStore(data: any, schema: Schema) {
  const { entities, result } = normalize(data, schema)
  yield put(entitiesActions.entitiesUpdated(entities))

  return result
}

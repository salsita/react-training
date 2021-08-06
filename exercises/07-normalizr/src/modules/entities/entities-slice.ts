import { createSlice, PayloadAction, CaseReducer } from '@reduxjs/toolkit'

import mergeWith from 'lodash/mergeWith'
import isArray from 'lodash/isArray'

import { UserEntities } from './entities-types'

export type EntitiesState = UserEntities

const initState: EntitiesState = {
  skills: {},
  userSkills: {},
  users: {},
}

const replaceArraysCustomizer = (objValue: unknown, srcValue: unknown) => {
  // if merging two arrays, replace original value with new one
  if (isArray(objValue) && isArray(srcValue)) {
    return srcValue
  }

  // otherwise merge as expected
  return undefined
}

const updateEntities: CaseReducer<
  EntitiesState,
  PayloadAction<Partial<EntitiesState>>
> = (state, action) =>
  mergeWith({}, state, action.payload, replaceArraysCustomizer)

const entitiesSlice = createSlice({
  name: 'entities',
  initialState: initState,
  reducers: {
    entitiesUpdated: updateEntities,
  },
})

export const entitiesReducer = entitiesSlice.reducer
export const entitiesActions = entitiesSlice.actions

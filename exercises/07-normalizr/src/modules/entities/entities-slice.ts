import { createSlice, PayloadAction, CaseReducer } from '@reduxjs/toolkit'

import mergeWith from 'lodash/mergeWith'
import isArray from 'lodash/isArray'

import { UserEntities, NormalizedUserEntities } from './entities-types'
import { usersActions } from 'modules/users/users-slice'

const initSate: UserEntities = {
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
  UserEntities,
  PayloadAction<NormalizedUserEntities>
> = (state, action) =>
  mergeWith({}, state, action.payload.entities, replaceArraysCustomizer)

const entitiesSlice = createSlice({
  name: 'entities',
  initialState: initSate,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(usersActions.usersLoaded, updateEntities)
  },
})

export const entitiesReducer = entitiesSlice.reducer
export const entitiesActions = entitiesSlice.actions

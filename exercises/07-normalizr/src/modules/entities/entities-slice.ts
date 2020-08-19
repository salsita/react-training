import { createSlice, PayloadAction, CaseReducer } from '@reduxjs/toolkit'

import mergeWith from 'lodash/mergeWith'
import isArray from 'lodash/isArray'

import { UserEntities } from './entities-types'
import { usersActions } from 'modules/users/users-slice'

interface EntitiesState extends UserEntities {}

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
  PayloadAction<{ entities: Partial<EntitiesState> }>
> = (state, action) =>
  mergeWith({}, state, action.payload.entities, replaceArraysCustomizer)

const entitiesSlice = createSlice({
  name: 'entities',
  initialState: initState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(usersActions.usersLoaded, updateEntities)
  },
})

export const entitiesReducer = entitiesSlice.reducer
export const entitiesActions = entitiesSlice.actions

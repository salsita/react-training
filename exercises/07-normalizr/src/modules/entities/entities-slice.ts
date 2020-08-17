import { createSlice } from '@reduxjs/toolkit'

import { UserEntities } from './entities-types'
import { usersActions } from 'modules/users/users-slice'

const initSate: UserEntities = {
  skills: {},
  userSkills: {},
  users: {},
}

const entitiesSlice = createSlice({
  name: 'entities',
  initialState: initSate,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(usersActions.usersLoaded, (state, action) => ({
      ...state,
      ...action.payload.entities,
    }))
  },
})

export const entitiesReducer = entitiesSlice.reducer
export const entitiesActions = entitiesSlice.actions

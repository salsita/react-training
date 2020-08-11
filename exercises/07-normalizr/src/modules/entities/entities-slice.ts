import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { UserEntities } from './entities-schema'

const initSate: UserEntities = {
  skills: {},
  userSkills: {},
  users: {},
}

const entitiesSlice = createSlice({
  name: 'entities',
  initialState: initSate,
  reducers: {
    entitiesLoaded: (state, action: PayloadAction<UserEntities>) => ({
      ...state,
      ...action.payload,
    }),
  },
})

export const entitiesReducer = entitiesSlice.reducer
export const entitiesActions = entitiesSlice.actions

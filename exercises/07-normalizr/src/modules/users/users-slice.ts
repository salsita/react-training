import { createSlice, PayloadAction, createAction } from '@reduxjs/toolkit'

import { UserData } from './user-types'
import { NormalizedSchema } from 'normalizr'

import { UserEntities, UserIds } from 'modules/entities/entities-schema'

export interface UsersState {
  title: string
  userIds: string[]
}

export const initialState: UsersState = {
  title: 'User Management',
  userIds: [],
}

const usersSlice = createSlice({
  name: 'users',
  initialState: initialState,
  reducers: {
    usersLoaded: (
      state,
      action: PayloadAction<NormalizedSchema<UserEntities, UserIds>>
    ) => ({
      ...state,
      userIds: action.payload.result,
    }),
  },
})

export const usersActions = {
  addUser: createAction<UserData>('users/addUser'),
  ...usersSlice.actions,
}

export const usersReducer = usersSlice.reducer

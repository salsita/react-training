import { createSlice, PayloadAction, createAction } from '@reduxjs/toolkit'

import { NormalizedUserEntities } from 'modules/entities/entities-types'
import { UserData } from './user-types'

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
    usersLoaded: (state, action: PayloadAction<NormalizedUserEntities>) => ({
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

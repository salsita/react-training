import { createSlice, PayloadAction, createAction } from '@reduxjs/toolkit'

import { UserIds } from 'modules/entities/entities-types'
import { UserName } from './user-types'

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
    usersLoaded: (state, action: PayloadAction<UserIds>) => ({
      ...state,
      userIds: action.payload,
    }),
  },
})

export const usersActions = {
  addUser: createAction<UserName, 'users/addUser'>('users/addUser'),
  ...usersSlice.actions,
}

export const usersReducer = usersSlice.reducer

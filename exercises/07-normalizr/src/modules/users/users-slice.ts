import { createSlice, PayloadAction, createAction } from '@reduxjs/toolkit'

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
    usersLoaded: (state, { payload: userIds }: PayloadAction<string[]>) => ({
      ...state,
      userIds,
    }),
  },
})

export const usersActions = {
  addUser: createAction<UserData>('users/addUser'),
  ...usersSlice.actions,
}

export const usersReducer = usersSlice.reducer

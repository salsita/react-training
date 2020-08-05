import { createSlice, PayloadAction, createAction } from '@reduxjs/toolkit'
import { UserData, User } from './user-types'

export interface UsersState {
  title: string
  users: User[]
}

export const initialState: UsersState = {
  title: 'User Management',
  users: [],
}

const usersSlice = createSlice({
  name: 'users',
  initialState: initialState,
  reducers: {
    usersLoaded: (state, { payload: users }: PayloadAction<User[]>) => ({
      ...state,
      users,
    }),
  },
})

export const usersActions = {
  addUser: createAction<UserData, 'users/addUser'>('users/addUser'),
  ...usersSlice.actions,
}

export const usersReducer = usersSlice.reducer

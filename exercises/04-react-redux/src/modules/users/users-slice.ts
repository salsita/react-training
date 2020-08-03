import { createSlice, PayloadAction } from '@reduxjs/toolkit'
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
    addUser: (state, { payload: user }: PayloadAction<UserData>) => ({
      ...state,
      users: [
        ...state.users,
        {
          id: state.users.length + 1,
          ...user,
        },
      ],
    }),
  },
})

export const usersActions = usersSlice.actions
export const usersReducer = usersSlice.reducer

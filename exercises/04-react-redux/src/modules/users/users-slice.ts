import { createSlice } from '@reduxjs/toolkit'

const INITIAL_STATE = {
  title: 'User Management',
  users: [],
}

const usersSlice = createSlice({
  name: 'users',
  initialState: INITIAL_STATE,
  reducers: {
    addUser: (state, { payload: user }) => ({
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

export const UsersActions = usersSlice.actions
export const usersReducer = usersSlice.reducer

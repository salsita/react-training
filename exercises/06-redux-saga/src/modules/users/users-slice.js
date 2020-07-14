import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  title: 'React is the best',
  users: []
};

const usersSlice = createSlice({
  name: 'users',
  initialState: INITIAL_STATE,
  reducers: {
    usersLoaded: (state, { payload: users }) => ({
      ...state,
      users
    })
  }
});

export const UsersActions = usersSlice.actions;
export const usersReducer = usersSlice.reducer;

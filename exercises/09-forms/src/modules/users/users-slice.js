import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  title: 'React is the best'
};

const usersSlice = createSlice({
  name: 'users',
  initialState: INITIAL_STATE
});

export const UsersActions = usersSlice.actions;
export const usersReducer = usersSlice.reducer;

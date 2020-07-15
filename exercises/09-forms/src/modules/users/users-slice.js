import { createSlice, createAction } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  title: 'React is the best'
};

const usersSlice = createSlice({
  name: 'users',
  initialState: INITIAL_STATE
});

export const UsersActions = {
  saveUser: createAction('users/saga/saveUser'),
  ...usersSlice.actions
}

export const usersReducer = usersSlice.reducer;

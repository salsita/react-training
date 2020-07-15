import { createSlice, createAction } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  title: 'React is the best',
  userIds: []
};

const usersSlice = createSlice({
  name: 'users',
  initialState: INITIAL_STATE,
  reducers: {
    usersLoaded: (state, { payload: userIds }) => ({
      ...state,
      userIds
    })
  }
});

export const UsersActions = {
  addUser: createAction('users/addUser'),
  ...usersSlice.actions
}

export const usersReducer = usersSlice.reducer;

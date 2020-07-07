import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  title: "React is the best",
  users: [],
};

const { actions, reducer } = createSlice({
  name: "users",
  initialState: INITIAL_STATE,
  reducers: {
    addUser: (state, action) => ({
      ...state,
      users: [
        ...state.users,
        {
          id: state.users.length + 1,
          ...action.payload,
        },
      ],
    }),
  },
});

export const UsersActions = actions;
export const usersReducer = reducer;

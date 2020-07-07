import "babel-polyfill";

import React from "react";
import ReactDOM from "react-dom";

import { createStore } from "redux";

import Root from "modules/root/components/root";
import rootReducer from "modules/root/root-reducer";

import { UsersActions } from "modules/users/users-slice";

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : (v) => v
);

const dispatchAddUser = (user) => store.dispatch(UsersActions.addUser(user));

const render = ({ users: { title, users } }) =>
  ReactDOM.render(
    <Root title={title} users={users} addUser={dispatchAddUser} />,
    document.getElementById("root")
  );

store.subscribe(() => render(store.getState()));

render(store.getState());

import React, {useCallback, useEffect, useState} from 'react';
import { Header } from './components/Header';

import './App.css';
import {UserList} from "./components/UserList";
import {UserForm} from "./components/UserForm";
import {BackendUser, backendUserToUser, JobTitle, User} from "./types/users";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {EditPage} from "./components/EditPage";
import axios, {AxiosResponse} from "axios";
import {useDispatch} from "react-redux";
import {addUser, setUsers} from "./store/actions/userActions";
import {UsersPage} from "./components/UsersPage";

function App() {
  const dispatch = useDispatch();

  // fetch the list of users on app startup
  useEffect(() => {
      axios({
          method: 'get',
          url: 'http://localhost:7000/users'
      }).then((response: AxiosResponse<BackendUser[]>) => {
          const backendUsers = response.data;
          const users = backendUsers.map(backendUser => backendUserToUser(backendUser))
          dispatch(setUsers(users))
      })
  }, [])
    // empty array in the dependencies will make this only fire after the first
    // render

  return (
      <BrowserRouter>
          <Switch>
              <Route exact path={"/"}>
                  <UsersPage />
              </Route>
              <Route exact path={"/user/:userId"}>
                  <EditPage />
              </Route>
          </Switch>
      </BrowserRouter>
  );
}

export default App;

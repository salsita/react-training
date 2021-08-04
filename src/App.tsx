import React, {useCallback, useState} from 'react';
import { Header } from './components/Header';

import './App.css';
import {UserList} from "./components/UserList";
import {UserForm} from "./components/UserForm";
import {JobTitle, User} from "./types/users";
import {createStore} from "redux";
import {Provider} from 'react-redux'
import {userReducer} from "./store/reducers/userReducer";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {EditPage} from "./components/EditPage";

function App() {
  // createStore makes our reducer function able to be used in the wild
  const store = createStore(userReducer);
  const [users, setUsers] = useState<User[]>([]);

  const onNewUserSave = useCallback((firstName, lastName, jobTitle, age) => {
      setUsers([
          ...users,
          {
              id: Date.now(),
              firstName,
              lastName,
              jobTitle,
              age
          }
      ])
  }, [setUsers, users]);

  return (
      <Provider store={store}>
          {/* Provider allows us to access redux from anywhere in the app */}
          <BrowserRouter>
              <Switch>
                  <Route exact path={"/"}>
                      <div>
                          <Header text={'User Management'} />
                          <UserForm onSubmit={onNewUserSave} />
                          <UserList />
                      </div>
                  </Route>
                  <Route exact path={"/user/:userId"}>
                      <EditPage />
                  </Route>
              </Switch>
          </BrowserRouter>
      </Provider>
  );
}

export default App;

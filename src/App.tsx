import React, {useCallback, useEffect, useState} from 'react';
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
import axios from "axios";

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

  useEffect(() => {
      // fetch the users from http://localhost:7000/users
      // axios
      //     .get('http://localhost:7000/users')
      //     .then((response) => {
      //         console.log('the response is: ', response)
      //         // stick the response in redux here
      //     })
      // console.log('Im saying this right after the axios call');

      const fetchUsers = async () => {
          const response = await axios.get('http://localhost:7000/users')
          console.log(response, `<- response`)
          // stick the response in redux here
      }

      fetchUsers();
  }, [])

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

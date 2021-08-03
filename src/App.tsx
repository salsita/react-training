import React, {useCallback, useState} from 'react';
import { Header } from './components/Header';

import './App.css';
import {UserList} from "./components/UserList";
import {AddUserForm} from "./components/AddUserForm";
import {JobTitle, User} from "./types/users";
import {createStore} from "redux";
import {Provider} from 'react-redux'
import {userReducer} from "./store/reducers/userReducer";

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
          <div>
            <Header text={'User Management'} />
            <AddUserForm onSave={onNewUserSave} />
            <UserList />
          </div>
      </Provider>
  );
}

export default App;

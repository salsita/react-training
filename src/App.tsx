import React, {useCallback, useState} from 'react';
import { Header } from './components/Header';

import './App.css';
import {UserList} from "./components/UserList";
import {AddUserForm} from "./components/AddUserForm";
import {JobTitle, User} from "./types/users";

const initialUsers: User[] = [
    {
        firstName: 'Daenerys',
        lastName: 'Targaeryn',
        jobTitle: JobTitle.motherOfDragons,
        age: 18
    },
    {
        firstName: 'Jaime',
        lastName: 'Lannister',
        jobTitle: JobTitle.kingSlayer,
        age: 30
    },
    {
        firstName: 'Arya',
        lastName: 'Stark',
        jobTitle: JobTitle.noOne,
        age: 16
    },
    {
        firstName: 'Peter',
        lastName: 'Baelish',
        jobTitle: JobTitle.lord,
        age: 45
    },
    {
        firstName: 'Ned',
        lastName: 'Stark',
        jobTitle: JobTitle.lord,
        age: 45
    },
    {
        firstName: 'Ygritte',
        lastName: 'Dunno',
        jobTitle: JobTitle.wildling,
        age: 23
    },
    {
        firstName: 'Tormund',
        lastName: 'Giantsbane',
        jobTitle: JobTitle.wildling,
        age: 36
    },
]

function App() {
  const [users, setUsers] = useState<User[]>(initialUsers);

  const onNewUserSave = useCallback((firstName, lastName, jobTitle, age) => {
      setUsers([
          ...users,
          {
              firstName,
              lastName,
              jobTitle,
              age
          }
      ])
  }, [setUsers, users]);

  return (
      <div>
        <Header text={'User Management'} />
        <AddUserForm onSave={onNewUserSave} />
        <UserList users={users} />
      </div>
  );
}

export default App;

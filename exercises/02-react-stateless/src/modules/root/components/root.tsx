import React from 'react'

import {
  UsersList,
  User,
  AddUserFunc,
} from 'modules/users/components/users-list'
import { Header } from './header'

interface RootProps {
  title: string
  users: Array<User>
  addUser: AddUserFunc
}

export const Root: React.FC<RootProps> = ({ title, users, addUser }) => (
  <div>
    <Header title={title} />
    <UsersList users={users} addUser={addUser} />
  </div>
)

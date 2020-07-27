import React from 'react'

import { UsersList } from 'modules/users/components/users-list'
import { User, AddUserFunc } from 'modules/users/users-types'

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

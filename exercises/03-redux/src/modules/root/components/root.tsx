import React from 'react'

import { UserList } from 'modules/users/components/user-list'
import { User, AddUserFunc } from 'modules/users/user-types'

import { Header } from './header'

interface RootProps {
  title: string
  users: User[]
  addUser: AddUserFunc
}

export const Root: React.FC<RootProps> = ({ title, users, addUser }) => (
  <div>
    <Header title={title} />
    <UserList users={users} addUser={addUser} />
  </div>
)

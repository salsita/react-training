import React from 'react'

import { UserList } from 'modules/users/components/user-list'
import { User, AddUser } from 'modules/users/user-types'

import { Header } from './header'

interface RootProps {
  title: string
  users: User[]
  addUser: AddUser
}

export const Root: React.FC<RootProps> = ({ title, users, addUser }) => (
  <>
    <Header title={title} />
    <UserList users={users} addUser={addUser} />
  </>
)

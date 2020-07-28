import React from 'react'

import { UserList } from 'modules/users/components/user-list'

import { Header } from './header'

export const Root: React.FC = () => (
  <div>
    <Header title="User Management" />
    <UserList />
  </div>
)

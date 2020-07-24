import React from 'react'

import { UsersList } from 'modules/users/components/users-list'

import { Header } from './header'

export const Root: React.FC = () => (
  <div>
    <Header title="User Management" />
    <UsersList />
  </div>
)

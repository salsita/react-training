import React from 'react'

import { Header } from './header'
import { UserList } from 'modules/users/components/user-list'

export const Root: React.FC = () => (
  <div>
    <Header />
    <UserList />
  </div>
)

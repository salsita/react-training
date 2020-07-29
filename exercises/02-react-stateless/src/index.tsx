import React from 'react'
import ReactDOM from 'react-dom'

import { Root } from 'modules/root/components/root'
import { User, AddUserFunc } from 'modules/users/user-types'

interface State {
  title: string
  users: User[]
}

let state: State = {
  title: 'User Management',
  users: [],
}

const addUser: AddUserFunc = (user) => {
  const { users } = state

  state = {
    ...state,
    users: [
      ...users,
      {
        ...user,
        id: users.length + 1,
      },
    ],
  }

  render()
}

const render = () =>
  ReactDOM.render(
    <Root title={state.title} users={state.users} addUser={addUser} />,
    document.getElementById('root')
  )

render()

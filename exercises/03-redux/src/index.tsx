import React from 'react'
import ReactDOM from 'react-dom'

import { Root } from 'modules/root/components/root'
import { AddUserFunc } from 'modules/users/user-types'

import { createStore, compose } from 'redux'

import { RootReducer, RootState } from 'modules/root/root-reducer'

import { UserActionCreators } from 'modules/users/user-actions'

// add redux devtools to window
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
  }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(RootReducer, composeEnhancers())

const dispatchAddUser: AddUserFunc = (user) =>
  store.dispatch(UserActionCreators.addUser(user))

const render = (state: RootState) => {

  const { title, users } = state.users

  ReactDOM.render(
    <Root title={title} users={users} addUser={dispatchAddUser} />,
    document.getElementById('root')
  )
}

store.subscribe(() => render(store.getState()))

render(store.getState())

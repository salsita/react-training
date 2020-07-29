import { UserData } from './user-types'

const ADD_USER = 'ADD_USER'

const addUser = (user: UserData) => ({ type: ADD_USER, payload: user })

export const UsersActions = {
  ADD_USER,
}

export const UsersCreators = {
  addUser,
}

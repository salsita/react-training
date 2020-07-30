import { UserData } from './user-types'

export const ADD_USER = 'users/addUser'

export interface AddUserAction {
  type: typeof ADD_USER
  payload: UserData
}

export const addUser = (userData: UserData): AddUserAction => ({
  type: ADD_USER,
  payload: userData,
})

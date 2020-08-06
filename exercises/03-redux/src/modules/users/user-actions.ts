import { Action, ActionCreator } from 'redux'
import { UserData } from './user-types'

export enum UserActionTypes {
  addUser = 'users/addUser',
}

export interface AddUserAction extends Action<UserActionTypes.addUser> {
  payload: UserData
}

export const addUser: ActionCreator<AddUserAction> = (userData: UserData) => ({
  type: UserActionTypes.addUser,
  payload: userData,
})

export type UserActions = AddUserAction

export const UserActionCreators = {
  addUser,
}

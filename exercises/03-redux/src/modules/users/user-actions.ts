import { Action, ActionCreator } from 'redux'
import { UserName } from './user-types'

export enum UserActionTypes {
  addUser = 'users/addUser',
}

export interface AddUserAction extends Action<UserActionTypes.addUser> {
  payload: UserName
}

export const addUser: ActionCreator<AddUserAction> = (userName: UserName) => ({
  type: UserActionTypes.addUser,
  payload: userName,
})

export type UserActions = AddUserAction

export const UserActionCreators = {
  addUser,
}

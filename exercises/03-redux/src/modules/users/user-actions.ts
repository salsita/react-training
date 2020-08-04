import { UserData } from './user-types'
import { Action, ActionCreator } from 'redux'

export enum UserActionTypes {
  addUser = 'users/addUser',
}

export interface AddUserAction extends Action<UserActionTypes.addUser> {
  payload: UserData
}

// addUser action creator
export const addUser: ActionCreator<AddUserAction> = (userData: UserData) => ({
  type: UserActionTypes.addUser,
  payload: userData,
})

export type UserActions = AddUserAction

export const UserActionCreators = {
  addUser,
}

import { UserData } from './user-types'
import { AnyAction, ActionCreator } from 'redux'

export enum UserActionTypes {
  addUser = 'users/addUser',
}

export interface AddUserAction extends AnyAction {
  type: UserActionTypes.addUser
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

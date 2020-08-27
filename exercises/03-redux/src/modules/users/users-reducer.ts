import { Reducer } from 'redux'

import { UserActionTypes, UserActions } from 'modules/users/user-actions'
import { User } from './user-types'

export interface UsersState {
  title: string
  users: User[]
}

const initialState: UsersState = {
  title: 'User Management',
  users: [],
}

export const usersReducer: Reducer<UsersState, UserActions> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case UserActionTypes.addUser:
      return {
        ...state,
        users: [
          ...state.users,
          {
            id: state.users.length + 1,
            ...action.payload,
          },
        ],
      }
    default:
      return state
  }
}

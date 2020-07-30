import { UserActionTypes, UserActions } from 'modules/users/user-actions'
import { User } from './user-types'

import { Reducer } from 'redux'

export interface UsersState {
  title: string
  users: User[]
}

const initialState: UsersState = {
  title: 'User Management',
  users: [],
}

export const UsersReducer: Reducer<UsersState, UserActions> = (
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

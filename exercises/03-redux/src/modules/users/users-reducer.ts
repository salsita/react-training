import * as UserActions from 'modules/users/users-actions'
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

export const UsersReducer: Reducer<UsersState, UserActions.AddUserAction> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case UserActions.ADD_USER:
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

import { UsersActions } from 'modules/users/users-actions'
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

export const UsersReducer: Reducer<UsersState> = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case UsersActions.ADD_USER:
      return {
        ...state,
        users: [
          ...state.users,
          {
            id: state.users.length + 1,
            ...payload,
          },
        ],
      }
    default:
      return state
  }
}

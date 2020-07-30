import { combineReducers } from 'redux'

import { UsersReducer as users } from 'modules/users/users-reducer'

export const rootReducer= combineReducers({
  users,
})

export type RootState = ReturnType<typeof rootReducer>

import { combineReducers } from 'redux'

import { usersReducer as users } from 'modules/users/users-slice'

export const rootReducer = combineReducers({
  users,
})

export type RootState = ReturnType<typeof rootReducer>

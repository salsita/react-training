import { combineReducers } from 'redux'

import { usersReducer as users } from 'modules/users/users-slice'
import { entitiesReducer as entities } from 'modules/entities/entities-slice'

export const rootReducer = combineReducers({
  entities,
  users,
})

export type RootState = ReturnType<typeof rootReducer>

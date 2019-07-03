import usersReducer from '../users/users-reducer'
import {combineReducers} from 'redux'

const rootReducer = combineReducers( {users: usersReducer })

export default rootReducer
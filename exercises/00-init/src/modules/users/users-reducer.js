import { createReducer } from 'reduxsauce'

import UsersActions from './users-actions'

const initialState = {
    title: "Users are reacting!",
    userList: []
}

const handlers = {
    [UsersActions.Types.LOADED]: (prevState, action) => ({
        ...prevState,
        userList: action.payload
    })
}

export default createReducer(initialState, handlers);
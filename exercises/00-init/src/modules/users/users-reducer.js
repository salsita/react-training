import { createReducer } from 'reduxsauce'

import UsersActions from './users-actions'


const initialState = {
    title: "Users are reacting!",
    userList: []
}

const handlers = {
    [UsersActions.Types.ADD]: (prevState, action) => ({
        ...prevState,
        userList: [
            ...prevState.userList,
            {   
                id: prevState.userList.length, 
                firstName: action.firstName, 
                lastName: action.lastName 
            }
        ]
    })
}

export default createReducer(initialState, handlers);
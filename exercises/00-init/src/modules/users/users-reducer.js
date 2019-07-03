import UsersActions from './users-actions'

function usersReducer(prevState, action) {
    if (prevState === undefined) {
        return {
            title: "Users are reacting!",
            users: []
        }
    }

    switch(action.type) {

        case UsersActions.Types.ADD_USER:
            return {
                    ...prevState,
                    users: [
                        ...prevState.users,
                        {   
                        id: prevState.users.length, 
                        firstName: action.payload.firstName, 
                        lastName: action.payload.lastName 
                        }
                    ]
                }
        default:
            return prevState;
    }
}

export default usersReducer;
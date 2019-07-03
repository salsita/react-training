import UsersActions from './users-actions'

const initialState = {
    title: "Users are reacting!",
    userList: []
}

const usersReducer = (prevState = initialState, action) => {

    switch(action.type) {

        case UsersActions.Types.ADD_USER:
            return {
                    ...prevState,
                    userList: [
                        ...prevState.userList,
                        {   
                        id: prevState.userList.length, 
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
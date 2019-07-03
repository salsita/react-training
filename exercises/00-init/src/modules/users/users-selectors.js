import { createSelector } from 'reselect'

const getUsers = (state) => state.users

const getTitle = createSelector(
    getUsers,
    (state) => state.title,
)

const getUsersList = createSelector(
    getUsers,
    state => state.userList
)


const getUsersUpperCase = createSelector(
    getUsersList,
    userList => userList.map( user => (
        {
            ...user, 
            lastName: user.lastName.toUpperCase() 
        } 
    ))
)

export { getTitle, getUsers, getUsersUpperCase} 
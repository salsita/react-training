import {User} from "../../types/users";

export interface AddUserAction {
    type: 'ADD_USER';
    user: User;
}

export interface DeleteUserAction {
    type: 'DELETE_USER';
    id: number;
}

export interface EditUserAction {
    type: 'EDIT_USER';
    id: User['id'];
    newData: User;
}

export interface SetUsersAction {
    type: 'SET_USERS';
    users: User[]
}

export type Action = AddUserAction | DeleteUserAction | EditUserAction | SetUsersAction

export const addUser = (user: User): AddUserAction => ({
    type: 'ADD_USER',
    user
})

export const deleteUser = (id: number): DeleteUserAction => ({
    type: 'DELETE_USER',
    id
})

export const editUser = (id: number, newData: User): EditUserAction => ({
    type: 'EDIT_USER',
    id,
    newData
})

export const setUsers = (users: User[]): SetUsersAction => ({
    type: 'SET_USERS',
    users
})
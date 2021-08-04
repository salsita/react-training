import {User} from "../../types/users";

export interface AddUserAction {
    type: 'ADD_USER';
    user: User;
}

export interface DeleteUserAction {
    type: 'DELETE_USER';
    id: number;
}

export type Action = AddUserAction | DeleteUserAction

export const addUser = (user: User): AddUserAction => ({
    type: 'ADD_USER',
    user
})

export const deleteUser = (id: number): DeleteUserAction => ({
    type: 'DELETE_USER',
    id
})
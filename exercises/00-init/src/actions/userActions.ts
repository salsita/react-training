import {AddUser, User} from "../modules/users/user-types";
import {SortType} from "../modules/sorts/sort_types";
import exp from "constants";
// Every action must have type
export type ADD_USER = 'ADD USER'
export const ADD_USER: ADD_USER = 'ADD USER'

export type EDIT_USER = 'EDIT USER'
export const EDIT_USER: EDIT_USER = 'EDIT USER'

export type SET_SORT_TYPE = 'SET_SORT_TYPE'
export const SET_SORT_TYPE: SET_SORT_TYPE = 'SET_SORT_TYPE'

export type SET_USERS = 'SET_USERS'
export const SET_USERS:  SET_USERS = 'SET_USERS'

export type DELETE_USER = 'DELETE_USER'
export const DELETE_USER:  DELETE_USER = 'DELETE_USER'

export interface AddUserAction {
    type: ADD_USER;
    user: User;
}

export interface SetSortTypeAction {
    type: SET_SORT_TYPE;
    sortType: SortType;
}

export interface EditUserAction {
    type: EDIT_USER;
    user: User;
}

export interface SetUsersAction {
    type: SET_USERS;
    users: Array<User>
}

export interface DeleteUserAction {
    type: DELETE_USER
    userId: number
}

export const addUser = (userName: string, id: number) => {
    return {
        type: ADD_USER,
        user: {userName, id}
    }
}

export const editUser = (id: number, userName: string, eyeColor: string | undefined, height: number | undefined) => {
    return {
        type: EDIT_USER,
        user: {id , userName, eyeColor, height}
    }
}

export const setSortType = (sortType: SortType) => {
    return {
        type: SET_SORT_TYPE,
        sortType: sortType
    }
}

export const setUsers = (users: Array<User>) => {
    return {
        type: SET_USERS,
        users: users
    }
}

export const deleteUser = (id: number) => {
    return {
        type: DELETE_USER,
        userId: id
    }
}

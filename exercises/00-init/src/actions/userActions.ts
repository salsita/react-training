import {AddUser, User} from "../modules/users/user-types";
import {SortType} from "../modules/sorts/sort_types";
// Every action must have type
export type ADD_USER = 'ADD USER'
export const ADD_USER: ADD_USER = 'ADD USER'

export type EDIT_USER = 'EDIT USER'
export const EDIT_USER: EDIT_USER = 'EDIT USER'

export type SET_SORT_TYPE = 'SET_SORT_TYPE'
export const SET_SORT_TYPE: SET_SORT_TYPE = 'SET_SORT_TYPE'

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


export const addUser = (username: string, id: number) => {
    return {
        type: ADD_USER,
        user: {username, id}
    }
}

export const editUser = (id: number, username: string, eyeColor: string | undefined, height: number | undefined) => {
    return {
        type: EDIT_USER,
        user: {id , username, eyeColor, height}
    }
}

export const setSortType = (sortType: SortType) => {
    return {
        type: SET_SORT_TYPE,
        sortType: sortType
    }
}



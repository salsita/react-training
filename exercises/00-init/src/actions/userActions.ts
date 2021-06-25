import {AddUser, User} from "../modules/users/user-types";
import {SortType} from "../modules/sorts/sort_types";
// Every action must have type
export type ADD_USER = 'ADD USER'
export const ADD_USER: ADD_USER = 'ADD USER'

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

export const addUser = (username: string) => {
    return {
        type: ADD_USER,
        user: {username: username}
    }
}

export const setSortType = (sortType: SortType) => {
    return {
        type: SET_SORT_TYPE,
        sortType: sortType
    }
}



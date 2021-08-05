import {JobTitle, User} from "../../types/users";
import {Reducer} from "redux";
import {Action, AddUserAction} from "../actions/userActions";

export interface UserState {
    users: User[]
}

const initialState: UserState = {
    users: []
}

export const userReducer: Reducer<UserState, Action> = (state= initialState, action): UserState => {
    // depending on action.type, return a new version of the state
    if (action.type === 'ADD_USER') {
       return {
           users: [
               ...state.users,
               action.user
           ]
       }
    }

    if (action.type === 'DELETE_USER') {
        return {
            users: state.users.filter(user => user.id !== action.id)
        }
    }

    if (action.type === 'EDIT_USER') {
        return {
            users: state.users.map(user => {
                return user.id === action.id ? action.newData : user
            })
        }
    }

    if (action.type === 'SET_USERS') {
        return {
            users: action.users
        }
    }

    return state
}
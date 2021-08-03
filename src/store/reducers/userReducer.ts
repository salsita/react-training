import {JobTitle, User} from "../../types/users";
import {Reducer} from "redux";
import {Action, AddUserAction} from "../actions/userActions";

export interface UserState {
    users: User[]
}

const initialState: UserState = {
    users: [
        {
            id: 1,
            firstName: 'Daenerys',
            lastName: 'Targaeryn',
            jobTitle: JobTitle.motherOfDragons,
            age: 18
        },
        {
            id: 2,
            firstName: 'Jaime',
            lastName: 'Lannister',
            jobTitle: JobTitle.kingSlayer,
            age: 30
        },
        {
            id: 3,
            firstName: 'Arya',
            lastName: 'Stark',
            jobTitle: JobTitle.noOne,
            age: 16
        },
        {
            id: 4,
            firstName: 'Peter',
            lastName: 'Baelish',
            jobTitle: JobTitle.lord,
            age: 45
        },
        {
            id: 5,
            firstName: 'Ned',
            lastName: 'Stark',
            jobTitle: JobTitle.lord,
            age: 45
        },
        {
            id: 6,
            firstName: 'Ygritte',
            lastName: 'I dont know',
            jobTitle: JobTitle.wildling,
            age: 23
        },
        {
            id: 7,
            firstName: 'Tormund',
            lastName: 'Giantsbane',
            jobTitle: JobTitle.wildling,
            age: 36
        },
    ]
}

export const userReducer: Reducer<UserState, Action> = (state, action): UserState => {
    if (state === undefined) {
        return initialState
    }

    // depending on action.type, return a new version of the state
    if (action.type === 'ADD_USER') {
       return {
           users: [
               ...state.users,
               action.user
           ]
       }
    }

    return state
}
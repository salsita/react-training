import {ADD_USER, EDIT_USER, SET_SORT_TYPE, setSortType} from "../actions/userActions";
import {Action, initialState} from "../store";
import {userList} from "../../cypress/support/constants";

// Index is name for 'main' files
export const rootReducer = (state = initialState, action: Action) => {
    if(action.type == ADD_USER) {
        return {
            ...state,
            usersList: [
                ...state.usersList,
                action.user
            ]
        }

    }

    if(action.type == SET_SORT_TYPE) {

        return {
            ...state,
            sortType: action.sortType
        }

    }

    if(action.type == EDIT_USER) {
        console.log(action.user)
        return {
            ...state,
            usersList: state.usersList.map(user => {
                if(user.id === action.user.id) {
                    console.log(action.user)
                    return action.user
                } else {
                    console.log(user)
                    return user
                }
            })
        }
    }
    return state
}
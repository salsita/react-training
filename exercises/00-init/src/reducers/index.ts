import {ADD_USER, SET_SORT_TYPE, setSortType} from "../actions/userActions";
import {Action, initialState} from "../store";

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
    return state
}
import {AddUserAction, EditUserAction, SET_SORT_TYPE, SetSortTypeAction} from "./actions/userActions";
import {EditUser, User} from "./modules/users/user-types";
import {createStore} from "redux";
import {rootReducer} from "./reducers";
import {SortType} from "./modules/sorts/sort_types";

export interface State {
    usersList: Array<User>
    sortType: SortType
}

export type Action = AddUserAction | SetSortTypeAction | EditUserAction

export const initialState: State = {usersList: [], sortType: ""}

export const store = createStore(rootReducer)

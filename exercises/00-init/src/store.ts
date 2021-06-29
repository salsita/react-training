import {
    AddUserAction,
    DeleteUserAction,
    EditUserAction,
    SET_SORT_TYPE,
    SET_USERS,
    SetSortTypeAction,
    SetUsersAction
} from "./actions/userActions";
import {EditUser, User} from "./modules/users/user-types";
import {createStore} from "redux";
import {rootReducer} from "./reducers";
import {SortType} from "./modules/sorts/sort_types";

export interface State {
    usersList: Array<User>
    sortType: SortType
}

export type Action = AddUserAction | SetSortTypeAction | EditUserAction | SetUsersAction | DeleteUserAction

export const initialState: State = {usersList: [], sortType: ""}

export const store = createStore(rootReducer)

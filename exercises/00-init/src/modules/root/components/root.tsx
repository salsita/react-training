import React, {useCallback, useState} from 'react'
import {UserList} from "./userlist";
import {Header, HeaderClass} from "./header";
import {AddUser, User} from "../../users/user-types";
import {Sort} from "./sort";
import {Input} from "./input";
import {createStore} from "redux";
import {userList} from "../../../../cypress/support/constants";
import exp from "constants";
import {Provider} from "react-redux";
import {rootReducer} from "../../../reducers";
import {store} from "../../../store";

export const Root: React.FC = () => {

    return (
        <Provider store={store}>
           <Header title={"Users Database"}></Header>
           <UserList/>
           <Sort/>
            <Input/>
        </Provider>
    )
}
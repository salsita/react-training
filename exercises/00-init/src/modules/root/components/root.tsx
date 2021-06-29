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
import {BrowserRouter, Route, Switch, Link} from "react-router-dom";
import {EditPage} from "./editpage";


export const Root: React.FC = () => {

    return (
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    {/* exact otherwise that path does not match */}
                    <Route exact path={"/"}>
                       <Header title={"Users Database"}></Header>
                       <UserList/>
                       <Sort/>
                       <Input/>
                    </Route>
                    <Route exact path={"/edit/:userId"}>
                        <EditPage />
                    </Route>
                </Switch>
            </BrowserRouter>
        </Provider>
    )
}
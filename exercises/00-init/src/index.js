import "babel-polyfill";

import React from "react";
import ReactDOM from "react-dom";

import Root from "modules/root/components/root";

import { addInitialState, addComponent, setRender, step } from "sam-pattern";

import Actions from "./modules/users/user-actions";
import Acceptors from "./modules/users/user-acceptors";

addInitialState({
    title: "User Management",
    users: []
});

const {
    intents: [init, addUser]
} = addComponent({
    actions: [step, Actions.addUser],
    acceptors: [Acceptors.setUsers]
});

const render = state => {
    ReactDOM.render(
        <Root title={state.title} users={state.users} addUser={addUser} />,
        document.getElementById("root")
    );
};

setRender(render);

init();

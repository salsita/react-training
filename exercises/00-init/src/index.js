import "babel-polyfill";

import React from "react";
import ReactDOM from "react-dom";

import Root from "modules/root/components/root";

let state = {
    title: "User Management",
    users: []
};

const render = () => {
    ReactDOM.render(
        <Root
            title={state.title}
            users={state.users}
            addUser={addUser}
            children={["1", "2"]}
        />,
        document.getElementById("root")
    );
};

const addUser = ({ firstName, lastName }) => {
    state = {
        ...state,
        users: [
            ...state.users,
            { id: state.users.length + 1, firstName, lastName }
        ]
    };
    console.log(state);
    render();
};

render();

import "babel-polyfill";

import React from "react";
import ReactDOM from "react-dom";

import Root from "modules/root/components/root";

import Intents from "./main";
import "./modules/users/user-naps";

import { setRender } from "sam-pattern";

const render = state => {
    console.log("rendering")
    ReactDOM.render(
        <Root title={state.title} users={state.users} addUser={Intents.addUser} />,
        document.getElementById("root")
    );
};

setRender(render);

Intents.init();

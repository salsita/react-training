import { addInitialState, addComponent, step } from "sam-pattern";

import Actions from "./modules/users/user-actions";
import Acceptors from "./modules/users/user-acceptors";

addInitialState({
    title: "User Management",
    users: []
});

const {
    intents: [init, addUser, refreshUsers]
} = addComponent({
    actions: [step, Actions.addUser, Actions.refreshUsers],
    acceptors: [Acceptors.reset, Acceptors.setUsers, Acceptors.setLastAddedUser]
});

export default { init, addUser, refreshUsers };

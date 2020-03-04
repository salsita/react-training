import { addNAPs } from "sam-pattern";
import Intents from "../../main";

const refreshUsers = (model) => () => {
    if (model.lastAddedUser) {
        Intents.refreshUsers();
        return true;
    }
    return false;
};

addNAPs([refreshUsers]);

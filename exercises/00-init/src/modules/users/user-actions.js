import UsersEffects from "./users-effects";

const addUser = async user => {
    const response = await UsersEffects.addUser(user);
    return { lastAddedUser: response.data };
};

const refreshUsers = async () => {
    const response = await UsersEffects.getUsers();
    return { users: response.data };
};

export default {
    addUser,
    refreshUsers
};

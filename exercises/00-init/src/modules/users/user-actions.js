import UsersEffects from "./users-effects";

const addUser = async user => {
    await UsersEffects.addUser(user);
    const response = await UsersEffects.getUsers();
    return ({ users: response.data });
};

export default {
    addUser
};

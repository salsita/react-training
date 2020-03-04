import apiClient from "modules/api/api-client";

const getUsers = () => apiClient.get("/users");
const addUser = user => apiClient.post("/users", user);

export default {
    getUsers,
    addUser
};

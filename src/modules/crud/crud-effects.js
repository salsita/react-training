import apiClient from "modules/api/api-client";
import wrapApiCall from "modules/api/wrap-api-call";

export const getUsers = wrapApiCall(() => apiClient.get("/users"));
export const addUser = wrapApiCall(user => apiClient.post("/users", user));
export const getUser = wrapApiCall(id => apiClient.get(`/users/${id}`));
export const deleteUser = wrapApiCall(id => apiClient.delete(`/users/${id}`));
export const updateUser = wrapApiCall((data, id) =>
  apiClient.patch(`/users/${id}`, data)
);

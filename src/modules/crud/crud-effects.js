import apiClient from "modules/api/api-client";
import wrapApiCall from "modules/api/wrap-api-call";

export const getUsers = wrapApiCall(() => apiClient.get("/users"));
export const getUser = wrapApiCall(id => apiClient.get(`/users/${id}`));
export const addUser = wrapApiCall(user => apiClient.put("/users", user));
export const deleteUser = wrapApiCall(id => apiClient.delete(`/users/${id}`));
export const updateUser = wrapApiCall((data, id) =>
  apiClient.post(`/users/${id}`, data)
);

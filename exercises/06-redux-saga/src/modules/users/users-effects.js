import apiClient from 'modules/api/api-client';

export const getUsers = () => apiClient.get('/users');
export const addUser = user => apiClient.post('/users', user);

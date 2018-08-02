import { wrapApiCall } from '@salsita/react-api';

import apiClient from 'modules/api/api-client';

export const getUsers = wrapApiCall(() => apiClient.get('/users'));
export const addUser = wrapApiCall(user => apiClient.post('/users', user));
export const getUser = wrapApiCall(id => apiClient.get(`/users/${id}`));

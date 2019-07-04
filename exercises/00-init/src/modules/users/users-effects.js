import {apiClient} from 'modules/api/api-client'

const getUsers = async () => {
    const response = await apiClient.get('/users');

    return response.data;
}

const addUser = async (firstName, lastName) => {
    const response = await apiClient.post('/users', {
        firstName: firstName,
        lastName: lastName
    }
    );

    return response.data;
}

export {getUsers, addUser}
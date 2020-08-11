import { apiClient } from 'modules/api/api-client'
import { UserData } from './user-types'

export const getUsers = () => apiClient.get('/users')
export const addUser = (user: UserData) => apiClient.post('/users', user)

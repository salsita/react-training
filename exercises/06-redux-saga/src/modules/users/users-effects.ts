import { apiClient } from 'modules/api/api-client'
import { UserData, User } from './user-types'

export const getUsers = () => apiClient.get<User[]>('/users')
export const addUser = (user: UserData) => apiClient.post<User>('/users', user)

import { apiClient } from 'modules/api/api-client'
import { UserName, User } from './user-types'

export const getUsers = () => apiClient.get<User[]>('/users')
export const addUser = (user: UserName) => apiClient.post<User>('/users', user)

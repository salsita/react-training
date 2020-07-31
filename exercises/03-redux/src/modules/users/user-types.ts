export interface UserData {
  firstName: string
  lastName: string
}

export interface User extends UserData {
  id: number
}

export type AddUserFunc = (user: UserData) => void

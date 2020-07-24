export interface UserData {
  firstName: string
  lastName: string
}

export interface User {
  id: number
  firstName: string
  lastName: string
}

export interface AddUserFunc {
  (user: UserData): void
}

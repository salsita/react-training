export interface UserData {
  firstName: string
  lastName: string
}

export interface User extends UserData {
  id: number
}

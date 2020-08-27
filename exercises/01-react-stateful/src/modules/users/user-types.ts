export interface UserName {
  firstName: string
  lastName: string
}

export interface User extends UserName {
  id: number
}

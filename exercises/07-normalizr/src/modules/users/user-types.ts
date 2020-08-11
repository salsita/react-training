export interface Skill {
  id: string
  name: string
}

export interface UserSkill {
  skill: Skill
  level: number
}

export interface UserData {
  firstName: string
  lastName: string
}

export interface User extends UserData {
  id: string
  regnalNumber: number
  skills: Array<UserSkill>
}

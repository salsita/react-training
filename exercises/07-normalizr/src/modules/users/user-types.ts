export interface Skill {
  id: string
  name: string
}

export interface UserSkill {
  skill: Skill
  level: number
}

export interface UserName {
  firstName: string
  lastName: string
}

export interface User extends UserName {
  id: string
  regnalNumber: number
  skills: Array<UserSkill>
}

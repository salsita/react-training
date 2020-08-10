interface Skill {
  id: string // e.g. skill-1
  name: string
}

interface UsersSkill {
  skill: Skill
  level: number
}

export interface UserData {
  firstName: string
  lastName: string
}

export interface User extends UserData {
  id: string
  regnalNumber: number // use Arabic numerals
  skills: Array<UsersSkill>
}

import { NormalizedSchema } from 'normalizr'

export interface Skill {
  id: string
  name: string
}

export interface UserSkill {
  id: string
  skill: string
  level: number
}

export interface User {
  id: string
  firstName: string
  lastName: string
  regnalNumber: number
  skills: string[]
}

export type UserEntities = {
  skills: { [key: string]: Skill }
  userSkills: { [key: string]: UserSkill }
  users: { [key: string]: User }
}

export type UserIds = string[]

export type NormalizedUserEntities = NormalizedSchema<UserEntities, UserIds>

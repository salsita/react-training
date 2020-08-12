import { schema } from 'normalizr'

export const skill = new schema.Entity('skills')
export const skills = [skill]

export const usersSkill = new schema.Entity(
  'userSkills',
  {
    skill,
  },
  {
    idAttribute: (value, parent) => `${value.skill.id}-${parent.id}`,
  }
)

export const usersSkills = [usersSkill]

export const user = new schema.Entity('users', {
  skills: usersSkills,
})

export const users = [user]

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

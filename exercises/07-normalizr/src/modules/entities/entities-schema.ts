import { schema } from 'normalizr'
import * as EntityTypes from './entities-types'

export const skill = new schema.Entity<EntityTypes.Skill>('skills')
export const skills = [skill]

export const userSkill = new schema.Entity<EntityTypes.UserSkill>(
  'userSkills',
  {
    skill,
  },
  {
    idAttribute: (value, parent) => `${value.skill.id}-${parent.id}`,
  }
)

export const userSkills = [userSkill]

export const user = new schema.Entity<EntityTypes.User>('users', {
  skills: userSkills,
})

export const users = [user]

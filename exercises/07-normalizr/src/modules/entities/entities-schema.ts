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

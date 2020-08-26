import { schema } from 'normalizr'

export const skill = new schema.Entity('skills')
export const skills = [skill]

export const userSkill = new schema.Entity(
  'userSkills',
  {
    skill,
  },
  {
    idAttribute: (value, parent) => `${value.skill.id}-${parent.id}`,
  }
)

export const userSkills = [userSkill]

export const user = new schema.Entity('users', {
  skills: userSkills,
})

export const users = [user]

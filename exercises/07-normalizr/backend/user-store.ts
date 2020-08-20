import { Skill, UserName, User } from '../src/modules/users/user-types'

import { userNameToString, computeRegnalNumber } from './utils'
import * as skills from './skills'

interface SkillTemplate {
  skill: Skill
  levelMultiplier: number
}

interface SkillMap {
  [key: string]: SkillTemplate
}

export const userList: User[] = []

const skillMap: SkillMap = {
  [userNameToString({ firstName: 'Arya', lastName: 'Stark' })]: {
    skill: skills.skillArya,
    levelMultiplier: 5,
  },
  [userNameToString({ firstName: 'Daenerys', lastName: 'Targaryen' })]: {
    skill: skills.skillDaenerys,
    levelMultiplier: 3,
  },
}

const getSkillForUser = (
  userName: UserName,
  regnalNumber: number,
  skillTemplates: SkillMap = skillMap
) => {
  let skillTemplate = skillTemplates[userNameToString(userName)]

  if (!skillTemplate) {
    skillTemplate = {
      skill: skills.skillDefault,
      levelMultiplier: 1,
    }
  }

  return [
    {
      skill: skillTemplate.skill,
      level: skillTemplate.levelMultiplier * regnalNumber,
    },
  ]
}

export const addUser = (userName: UserName, users: User[] = userList) => {
  const regnalNumber = computeRegnalNumber(users, userName)
  const usersSkills = getSkillForUser(userName, regnalNumber)

  const user = {
    id: `user-${users.length + 1}`,
    ...userName,
    regnalNumber,
    skills: usersSkills,
  }

  users.push(user)
  return user
}

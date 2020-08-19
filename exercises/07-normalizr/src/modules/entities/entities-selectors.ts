import { createSelector } from 'reselect'
import { mapValues } from 'lodash'

import { RootState } from 'modules/root/root-reducer'

const getEntitiesState = (state: RootState) => state.entities

export const getSkills = createSelector(
  getEntitiesState,
  (entities) => entities.skills
)

export const getUserSkills = createSelector(
  getEntitiesState,
  getSkills,
  ({ userSkills }, skills) =>
    mapValues(userSkills, (userSkill) => ({
      ...userSkill,
      skill: skills[userSkill.skill],
    }))
)

export const getUserEntities = createSelector(
  getEntitiesState,
  getUserSkills,
  ({ users }, userSkills) =>
    mapValues(users, (user) => ({
      ...user,
      skills: user.skills.map((userSkillId) => userSkills[userSkillId]),
    }))
)

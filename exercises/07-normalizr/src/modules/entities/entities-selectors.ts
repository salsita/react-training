import { createSelector } from 'reselect'

import { RootState } from 'modules/root/root-reducer'
import { UserSkill, User } from 'modules/users/user-types'

const getEntitiesState = (state: RootState) => state.entities

export const getSkills = createSelector(
  getEntitiesState,
  (entities) => entities.skills
)

export const getUserSkills = createSelector(
  getEntitiesState,
  getSkills,
  (entities, skills) =>
    Object.keys(entities.userSkills || {}).reduce<{
      [key: string]: UserSkill
    }>(
      (memo, userSkillId) => ({
        ...memo,
        [userSkillId]: {
          ...entities.userSkills[userSkillId],
          skill: skills[entities.userSkills[userSkillId].skill],
        },
      }),
      {}
    )
)

export const getUserEntities = createSelector(
  getEntitiesState,
  getUserSkills,
  (entities, userSkills) =>
    Object.keys(entities.users || {}).reduce<{ [key: string]: User }>(
      (memo, userId) => ({
        ...memo,
        [userId]: {
          ...entities.users[userId],
          skills: entities.users[userId].skills.map(
            (userSkillId) => userSkills[userSkillId]
          ),
        },
      }),
      {}
    )
)

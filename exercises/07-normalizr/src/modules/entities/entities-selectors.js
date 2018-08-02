import { createSelector } from 'reselect';

import { RootSelectors } from '@salsita/react-core';

export const getSkills = createSelector(RootSelectors.getEntities, state => state.skills);

export const getUsersSkills = createSelector(
  RootSelectors.getEntities,
  getSkills,
  (entities, skills) =>
    Object.keys(entities.usersskills || {}).reduce(
      (memo, userSkillId) => ({
        ...memo,
        [userSkillId]: {
          ...entities.usersskills[userSkillId],
          skill: skills[entities.usersskills[userSkillId].skill]
        }
      }),
      {}
    )
);

export const getUsers = createSelector(
  RootSelectors.getEntities,
  getUsersSkills,
  (entities, usersSkills) =>
    Object.keys(entities.users || {}).reduce(
      (memo, userId) => ({
        ...memo,
        [userId]: {
          ...entities.users[userId],
          skills: entities.users[userId].skills.map(
            userSkillId => usersSkills[userSkillId]
          )
        }
      }),
      {}
    )
);

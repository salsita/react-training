import { createSelector } from "reselect";
import { getEntityRepository as getState } from "modules/root/root-selectors";

export const getSkills = createSelector(getState, state => state.skills);

export const getUsersSkills = createSelector(
  getState,
  getSkills,
  (state, skills) =>
    Object.keys(state.usersskills || {}).reduce(
      (memo, userSkillId) => ({
        ...memo,
        [userSkillId]: {
          ...state.usersskills[userSkillId],
          skill: skills[state.usersskills[userSkillId].skill]
        }
      }),
      {}
    )
);

export const getUsers = createSelector(
  getState,
  getUsersSkills,
  (state, usersSkills) =>
    Object.keys(state.users || {}).reduce(
      (memo, userId) => ({
        ...memo,
        [userId]: {
          ...state.users[userId],
          skills: state.users[userId].skills.map(
            userSkillId => usersSkills[userSkillId]
          )
        }
      }),
      {}
    )
);

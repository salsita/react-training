import { createSelector } from "reselect";
import { getEntityRepository as getState } from "modules/root/root-selectors";

export const getUsers = createSelector(getState, state => state.users);

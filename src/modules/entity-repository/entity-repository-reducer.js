import merge from "lodash/merge";
import { createReducer } from "reduxsauce";

import Actions from "modules/entity-repository/entity-repository-actions";

const INITIAL_STATE = {};

const repositoryHasChanged = (state, { repository }) =>
  merge({}, state, repository);

export const HANDLERS = {
  [Actions.Types.REPOSITORY_HAS_CHANGED]: repositoryHasChanged
};

export default createReducer(INITIAL_STATE, HANDLERS);

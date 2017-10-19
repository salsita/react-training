import mergeWith from "lodash/mergeWith";
import isArray from "lodash/isArray";
import { createReducer } from "reduxsauce";

import Actions from "modules/entity-repository/entity-repository-actions";

const INITIAL_STATE = {};

const repositoryHasChanged = (state, { repository }) =>
  mergeWith({}, state, repository, (objValue, srcValue) => {
    // If merging two arrays, just replace original value
    // with new one
    if (isArray(objValue) && isArray(srcValue)) {
      return srcValue;
    }

    // Other values merge as expected
    return undefined;
  });

export const HANDLERS = {
  [Actions.Types.REPOSITORY_HAS_CHANGED]: repositoryHasChanged
};

export default createReducer(INITIAL_STATE, HANDLERS);

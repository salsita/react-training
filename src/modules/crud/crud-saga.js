import { all, call, fork, put, select } from "redux-saga/effects";
import { startSubmit, stopSubmit } from "redux-form";

import * as Routes from "modules/routing/routes";
import * as Effects from "modules/crud/crud-effects";
import * as Entities from "modules/crud/crud-entities";
import * as Schema from "modules/crud/crud-schema";
import * as RoutingSelectors from "modules/routing/routing-selectors";
import identityFn from "helpers/identity-fn";
import compose from "helpers/compose-saga";
import Actions from "modules/crud/crud-actions";
import { normalizeAndStore } from "modules/entity-repository/entity-repository-saga";
import { withErrorHandling, withLoadingIndicator } from "modules/api/api-saga";
import { BusinessValidationError } from "modules/api/api-errors";
import { onRouteTransition } from "modules/routing/routing-saga";

/**
 * Returns effect & schema pair will will be used for saving & normalizing the entity.
 * 
 * @param {String} Entity type
 * @param {Boolean} Flag if entity is being updated or created
 *
 * @returns {Object} Object containing effect to be executed and schema for normalizing the result
 */
const mapEntityToSaveParams = (entity, isUpdate) => {
  switch (entity) {
    case Entities.USER:
      return {
        effect: isUpdate ? Effects.updateUser : Effects.addUser,
        schema: Schema.user
      };

    default:
      throw new Error(`Unknown entity ${entity}`);
  }
};

/**
 * Creates a composed effectParamsFactory which automatically passes
 * current route params to effectParamsFactory
 * 
 * @param {Function} effectParamsFactory to be wrapped
 * @returns {Function} Composed effectParamsFactory
 */
const withRouterParams = effectParamsFactory => state =>
  effectParamsFactory(RoutingSelectors.getRouteParams(state));

/**
 * Returns effect & schema pair which will be used for fetching & normalizing the entity based on provided route.
 * @param {String} Route
 * @param {Object} Entire application state - so that effect can be parameterized if necessary
 *
 * @returns {Object} Object containing effect to be executed and schema for normalizing the result
 */
const mapRouteToFetchParams = route => {
  switch (route) {
    case Routes.USERS_LIST:
      return [
        {
          effect: Effects.getUsers,
          schema: Schema.users
        },
        {
          effect: Effects.getSkills,
          schema: Schema.skills
        }
      ];

    case Routes.USER_DETAIL:
      return [
        {
          effect: Effects.getUser,
          schema: Schema.user,
          effectParamsFactory: withRouterParams(routeParams => [
            routeParams[Routes.USER_ROUTE_ID_PARAM]
          ])
        }
      ];

    default:
      return null;
  }
};

export function* fetchEntityByFetchParams(fetchParams, state, route, index) {
  const { effect, schema, effectParamsFactory = () => [] } = fetchParams;

  // Just call the effect
  const data = yield call(effect, ...effectParamsFactory(state));

  // Normalize the response
  const result = yield call(normalizeAndStore, data, schema);

  // And store the result
  yield put(Actions.Creators.entitiesFetched(route, index, result));
}

/**
 * Fetches CRUD entity/ies based on provided route.
 * Fetched entity/ies is/are automatically normalized and
 * reference to it stored in the app state
 */
export function* fetchEntitiesImpl(route) {
  const fetches = mapRouteToFetchParams(route);

  // Some routes might not have CRUD fetching defined
  // We'll skip these
  if (fetches) {
    // Fetch state so that it's possible to pass it
    // to effectParamsFactory to return params
    // of the effect
    const state = yield select(identityFn);

    yield all(
      fetches.map((fetchParams, index) =>
        fork(fetchEntityByFetchParams, fetchParams, state, route, index)
      )
    );
  }
}

export const fetchEntities = compose(
  withErrorHandling,
  withLoadingIndicator,
  fetchEntitiesImpl
);

/**
 * Creates or Updates entity from form data. After entity
 * has been saved, it refelects the data back into entity repo.
 * 
 * @param {Object} entity data
 * @param {String} entity type
 * @param {String} form id
 * 
 * @returns {Object} updated entity
 */
export function* saveEntityImpl({ id, ...entityData }, entity, form) {
  try {
    yield put(startSubmit(form));
    const { effect, schema } = mapEntityToSaveParams(entity, Boolean(id));

    const updatedEntity = yield call(
      effect,
      ...[entityData, id].filter(Boolean)
    );
    yield call(normalizeAndStore, updatedEntity, schema);
    yield put(stopSubmit(form));

    return updatedEntity;
  } catch (exception) {
    // In case of business validation error
    // let's just deal with the error
    // and inform the form about the exception.
    if (exception instanceof BusinessValidationError) {
      yield put(stopSubmit(form, exception.getReason()));
      return false;
    } else {
      throw exception;
    }
  }
}

export const saveEntity = compose(
  withErrorHandling,
  withLoadingIndicator,
  saveEntityImpl
);

/**
 * Handles sucessful route transition and automatically calls
 * fetch for all corresponding routes
 * 
 * @param {Array} Array of activated routes
 */
export function* routeTransitioned(toActivate) {
  // Call fetch for all activated routes
  yield all(toActivate.map(route => call(fetchEntities, route)));
}

export default function* crudSaga() {
  yield all([fork(onRouteTransition, routeTransitioned)]);
}

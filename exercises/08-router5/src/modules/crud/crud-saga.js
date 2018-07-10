import { withRouterParams } from '@salsita/react-crud';

import * as Entities from 'modules/crud/crud-entities';
import * as Schema from 'modules/entities/entities-schema';
import * as Routes from 'modules/router/routes';
import * as Effects from 'modules/users/users-effects';

/**
 * Returns effect & schema pair will will be used for saving & normalizing the entity.
 *
 * @param {String} Entity type
 * @param {Boolean} Flag if entity is being updated or created
 *
 * @returns {Object} Object containing effect to be executed and schema for normalizing the result
 */
export const mapEntityToSaveParams = (entity, isUpdate) => {
  switch (entity) {
    case Entities.USER:
      return {
        effect: Effects.addUser,
        schema: Schema.user
      };

    default:
      throw new Error(`Unknown entity ${entity}`);
  }
};

/**
 * Returns effect & schema pair which will be used for fetching & normalizing the entity based on provided route.
 * @param {String} Route
 * @param {Object} Entire application state - so that effect can be parameterized if necessary
 *
 * @returns {Object} Object containing effect to be executed and schema for normalizing the result
 */
export const mapRouteToFetchParams = route => {
  switch (route) {
    case Routes.USERS_LIST:
      return {
        users: {
          effect: Effects.getUsers,
          schema: Schema.users
        }
      };

    case Routes.USER_DETAIL:
      return {
        user: {
          effect: Effects.getUser,
          schema: Schema.user,
          effectParamsFactory: withRouterParams(routeParams => [
            routeParams[Routes.USER_ROUTE_ID_PARAM]
          ])
        }
      };

    default:
      return null;
  }
};

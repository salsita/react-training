import { all, call, put, select } from "redux-saga/effects";

import * as Saga from "modules/crud/crud-saga";
import * as Schema from "modules/crud/crud-schema";
import Actions from "modules/crud/crud-actions";
import identityFn from "helpers/identity-fn";
import { USERS_LIST } from "modules/routing/routes";
import { getUsers } from "modules/crud/crud-effects";
import { normalizeAndStore } from "modules/entity-repository/entity-repository-saga";

describe("CRUD Saga Tests", () => {
  it("should fetch API effect, normalize result and store entity references", () => {
    const it = Saga.fetchEntities(USERS_LIST);

    // Should select the whole state first
    // in order to pass it to effect mapper
    expect(it.next().value).toEqual(select(identityFn));

    // Because USER_LIST route is requested
    // it should call getUsers effect
    expect(it.next().value).toEqual(call(getUsers));

    const MOCK_USER_LIST = [
      { id: "user-1", firstName: "bar", lastName: "qux" }
    ];

    // It should normalize the response
    expect(it.next(MOCK_USER_LIST).value).toEqual(
      call(normalizeAndStore, MOCK_USER_LIST, Schema.users)
    );

    const MOCK_NORMALIZED_RESULT = [1, 2, 3];

    // It should store normalized references of entities
    expect(it.next(MOCK_NORMALIZED_RESULT).value).toEqual(
      put(Actions.Creators.entitiesFetched(USERS_LIST, MOCK_NORMALIZED_RESULT))
    );
  });

  it("should do nothing for unknown routes", () => {
    const it = Saga.fetchEntities("foobarroute");
    expect(it.next()).toEqual({ done: true, value: undefined });
  });

  it("should call fetch entities for route in transition path", () => {
    const it = Saga.onRouteTransition({
      payload: { route: { name: USERS_LIST }, previousRoute: null }
    });

    expect(it.next().value).toEqual(
      all([call(Saga.fetchEntities, USERS_LIST)])
    );
  });
});

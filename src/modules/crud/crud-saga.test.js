import { all, call, put, select } from "redux-saga/effects";
import { startSubmit, stopSubmit } from "redux-form";

import * as Saga from "modules/crud/crud-saga";
import * as Schema from "modules/crud/crud-schema";
import * as Entities from "modules/crud/crud-entities";
import Actions from "modules/crud/crud-actions";
import identityFn from "helpers/identity-fn";
import { USERS_LIST } from "modules/routing/routes";
import { getUsers, addUser, updateUser } from "modules/crud/crud-effects";
import { normalizeAndStore } from "modules/entity-repository/entity-repository-saga";

describe("CRUD Saga Tests", () => {
  it("should fetch API effect, normalize result and store entity references", () => {
    const it = Saga.fetchEntitiesImpl(USERS_LIST);

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
    const it = Saga.fetchEntitiesImpl("foobarroute");
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

  it("should call the API, normalize the result and wrap everything into submitting redux form flag", () => {
    const MOCK_FORM = "foobar";
    const MOCK_ENTITY = { firstName: "John" };

    const it = Saga.saveEntityImpl(MOCK_ENTITY, Entities.USER, MOCK_FORM);

    // Should set start submitting flag in redux form
    expect(it.next().value).toEqual(put(startSubmit(MOCK_FORM)));

    // Should add the user because ID is not present in the entity
    // therefore it should create the user
    expect(it.next().value).toEqual(call(addUser, MOCK_ENTITY));

    // Should normalize the updated entity
    const UPDATED_ENTITY_MOCK = { firstName: "FOOBAR" };
    expect(it.next(UPDATED_ENTITY_MOCK).value).toEqual(
      call(normalizeAndStore, UPDATED_ENTITY_MOCK, Schema.user)
    );

    // Should reset submitting flag in redux form
    expect(it.next().value).toEqual(put(stopSubmit(MOCK_FORM)));

    // Finally should return updated entity
    expect(it.next()).toEqual({
      done: true,
      value: UPDATED_ENTITY_MOCK
    });
  });

  it("should call update when id is present in the entity", () => {
    const MOCK_ENTITY = {
      firstName: "John",
      lastName: "Doe",
      id: "user-42"
    };
    const it = Saga.saveEntityImpl(MOCK_ENTITY, Entities.USER, "bazbar");

    // skip form submitting field
    it.next();

    // Should call update user
    // with user payload (without ID)
    // and ID
    expect(it.next().value).toEqual(
      call(
        updateUser,
        {
          firstName: MOCK_ENTITY.firstName,
          lastName: MOCK_ENTITY.lastName
        },
        MOCK_ENTITY.id
      )
    );
  });
});

import { fork, take } from "redux-saga/effects";
import { actionTypes } from "redux-router5";

import * as Saga from "modules/routing/routing-saga";
import * as Routes from "modules/routing/routes";

describe("Routing Saga Tests", () => {
  it("should pass transition path to provided saga based on transition success action", () => {
    const MOCK_SAGA = () => {};
    const MOCK_PARAM = 42;
    const it = Saga.onRouteTransition(MOCK_SAGA, MOCK_PARAM);

    // Should wait until transtion success
    expect(it.next().value).toEqual(take(actionTypes.TRANSITION_SUCCESS));

    // Should call mock saga with whole transition path
    expect(
      it.next({
        payload: {
          route: { name: Routes.USER_CREATE },
          previousRoute: null
        }
      }).value
    ).toEqual(
      fork(MOCK_SAGA, [Routes.USERS_LIST, Routes.USER_CREATE], MOCK_PARAM)
    );
  });
});

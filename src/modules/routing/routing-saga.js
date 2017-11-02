import transitionPath from "router5.transition-path";
import { fork, take } from "redux-saga/effects";
import { actionTypes } from "redux-router5";

export function* onRouteTransition(saga, ...params) {
  while (true) {
    const { payload: { route, previousRoute } } = yield take(
      actionTypes.TRANSITION_SUCCESS
    );

    const { toActivate } = transitionPath(route, previousRoute);

    yield fork(saga, toActivate, ...params);
  }
}

export function* onRouteEnter(route, saga, ...params) {
  yield fork(onRouteTransition, function*(toActivate) {
    if (toActivate.some(activatedRoute => activatedRoute === route)) {
      yield fork(saga, ...params);
    }
  });
}

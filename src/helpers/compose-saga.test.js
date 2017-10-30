import { call, take, put } from "redux-saga/effects";
import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";

import composeSaga from "helpers/compose-saga";

const sagaMiddleware = createSagaMiddleware();

describe("Compose Saga Tests", () => {
  it("should compose two sagas together", () => {
    const START_ACTION = "START";
    const ERROR_ACTION = "ERROR";

    const ERROR_MOCK = new Error("testing error");

    // This is the inner saga
    // which just throws some error
    function* errorSaga() {
      yield take(START_ACTION);
      throw ERROR_MOCK;
    }

    // This is the outer saga
    // which should just wrap inner saga
    // catch specific error and translate it
    // to ERROR_ACTION
    function* withErrorHandling(saga) {
      try {
        yield call(saga);
      } catch (ex) {
        if (ex === ERROR_MOCK) {
          yield put({ type: ERROR_ACTION });
        }
      }
    }

    // Compose these two together
    const composedSaga = composeSaga(withErrorHandling, errorSaga);

    // Reducer should mutate the state only
    // when handling ERROR_ACTION
    const reducer = (state = 0, { type }) =>
      type === ERROR_ACTION ? 42 : state;

    // Let's setup a store
    const store = createStore(reducer, applyMiddleware(sagaMiddleware));
    sagaMiddleware.run(composedSaga);

    // And dispatch the action which starts up
    // all the machinery
    store.dispatch({ type: START_ACTION });

    // Because outer saga should wrap inner saga
    // resulted state should be 42
    expect(store.getState()).toBe(42);
  });
});

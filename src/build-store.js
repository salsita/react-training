import createSagaMiddleware from "redux-saga";
import { applyMiddleware, compose, createStore } from "redux";
import { router5Middleware } from "redux-router5";

import identityFn from "helpers/identity-fn";
import rootReducer from "modules/root/root-reducer";
import rootSaga from "modules/root/root-saga";

const buildStore = router => {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(sagaMiddleware, router5Middleware(router)),
      process.env.NODE_ENV !== "production" &&
      window.__REDUX_DEVTOOLS_EXTENSION__
        ? window.__REDUX_DEVTOOLS_EXTENSION__()
        : identityFn
    )
  );
  sagaMiddleware.run(rootSaga);

  return store;
};

export default buildStore;

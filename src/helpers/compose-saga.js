import { call } from "redux-saga/effects";

/**
 * A helper function to compose multiple sagas.
 * Given two Sagas as arguments, eg. compose(f, g)
 * function composition f∘g is performed.
 *
 * @param {...Generator} Sagas to be composed
 * @return {Generator} Composed Saga
 */
export const composeSaga = (...sagas) =>
  function* composedSaga(...args) {
    // Let's create a recursive function which takes
    // current Saga index as argument
    const rec = index =>
      function* recursiveSaga() {
        // If index is not last
        // let's call the current
        // saga and pass next saga
        // recursively as argument
        if (index < sagas.length - 1) {
          return yield call(sagas[index], rec(index + 1));
        }

        // Last saga is just going to be executed
        // with argument specified by the user.
        return yield call(sagas[index], ...args);
      };

    // Let's start the recursion here
    return yield call(rec(0));
  };

export default composeSaga;

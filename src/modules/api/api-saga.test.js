import { call, put } from "redux-saga/effects";

import emptyFn from "helpers/empty-fn";
import Actions from "modules/api/api-actions";
import { ApiError } from "modules/api/api-errors";
import * as Saga from "modules/api/api-saga";

function* MOCK_SAGA() {}
const MOCK_ARGUMENT = 42;

describe("API saga tests", () => {
  it("should catch api error and translate that into API_ERROR action", () => {
    const MOCK_ERROR_TYPE = "foobar";
    const MOCK_ERROR_REASON = "bazbar";

    const consoleError = jest
      .spyOn(global.console, "error")
      .mockImplementation(emptyFn);

    const it = Saga.withErrorHandling(MOCK_SAGA, MOCK_ARGUMENT);

    // Should call the saga first with passed arguments
    expect(it.next().value).toEqual(call(MOCK_SAGA, MOCK_ARGUMENT));

    const error = new ApiError(MOCK_ERROR_TYPE, MOCK_ERROR_REASON);

    // Should put API_ERROR
    expect(it.throw(error).value).toEqual(
      put(Actions.Creators.apiError(MOCK_ERROR_TYPE, MOCK_ERROR_REASON))
    );

    // Should log the error into console
    expect(consoleError).toHaveBeenLastCalledWith(error);
  });

  it("should not catch random exception", () => {
    const it = Saga.withErrorHandling(MOCK_SAGA);
    it.next();

    const MOCK_ERROR = new Error("foobar");

    // Whenever anything else from ApiError is thrown
    // it should not be caught
    expect(() => {
      it.throw(MOCK_ERROR);
    }).toThrow(MOCK_ERROR);
  });
});

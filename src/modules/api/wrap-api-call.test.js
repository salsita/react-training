import wrapApiCall from "modules/api/wrap-api-call";
import {
  ApiError,
  BusinessValidationError,
  API_VALIDATION_ERROR,
  NETWORK_ERROR,
  UNKNOWN_API_ERROR
} from "modules/api/api-errors";

describe("Wrap API call tests", () => {
  it("should separate data from result and return it as response and pass params", async () => {
    const MOCK_ARG = 42;
    const MOCK_RES = 24;

    const apiSpy = jest.fn(() => ({ data: MOCK_RES }));
    const wrapped = wrapApiCall(apiSpy);

    const result = await wrapped(MOCK_ARG);

    expect(result).toBe(MOCK_RES);
    expect(apiSpy).toHaveBeenLastCalledWith(MOCK_ARG);
  });

  it("should throw BusinessValidationError when CONFLICT is returned", async () => {
    const wrapped = wrapApiCall(() => {
      throw { response: { data: { foo: "bar" }, status: 409 } };
    });

    try {
      await wrapped();
      expect(true).toBeFalsy();
    } catch (ex) {
      expect(ex instanceof BusinessValidationError).toBeTruthy();
      expect(ex.getReason()).toEqual({ foo: "bar" });
      expect(ex.getType()).toBe(API_VALIDATION_ERROR);
    }
  });

  it("should throw UNKNOWN_API_ERROR when status is unknown and exception contains response", async () => {
    const wrapped = wrapApiCall(() => {
      throw { response: { data: { baz: "bar" }, status: 50000 } };
    });

    try {
      await wrapped();
      expect(true).toBeFalsy();
    } catch (ex) {
      expect(ex instanceof ApiError).toBeTruthy();
      expect(ex.getReason()).toEqual({ baz: "bar" });
      expect(ex.getType()).toBe(UNKNOWN_API_ERROR);
    }
  });

  it("should throw NETWORK_ERROR when exception does not contain response", async () => {
    const MOCK_MESSAGE = "message";
    const wrapped = wrapApiCall(() => {
      throw new Error(MOCK_MESSAGE);
    });

    try {
      await wrapped();
      expect(true).toBeFalsy();
    } catch (ex) {
      expect(ex instanceof ApiError).toBeTruthy();
      expect(ex.getReason()).toBe(MOCK_MESSAGE);
      expect(ex.getType()).toBe(NETWORK_ERROR);
    }
  });
});

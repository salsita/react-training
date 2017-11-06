import reducer from "modules/crud/crud-reducer";
import Actions from "modules/crud/crud-actions";

const MOCK_ROUTE = "foobar";
const MOCK_RESULT = [1, 2, 3, 4];

describe("Crud Reducer Test", () => {
  it("should store entity references in app state", () => {
    expect(
      reducer(
        undefined,
        Actions.Creators.entitiesFetched(MOCK_ROUTE, 0, MOCK_RESULT)
      )
    ).toEqual({
      [MOCK_ROUTE]: {
        0: MOCK_RESULT
      }
    });
  });

  it("should store array of entity references in app state", () => {
    let state = reducer(
      undefined,
      Actions.Creators.entitiesFetched(MOCK_ROUTE, 0, MOCK_RESULT)
    );

    const ANOTHER_MOCK_RESULT = [42];
    state = reducer(
      state,
      Actions.Creators.entitiesFetched(MOCK_ROUTE, 42, ANOTHER_MOCK_RESULT)
    );

    expect(state).toEqual({
      [MOCK_ROUTE]: {
        0: MOCK_RESULT,
        42: ANOTHER_MOCK_RESULT
      }
    });
  });
});

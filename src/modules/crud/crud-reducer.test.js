import reducer from "modules/crud/crud-reducer";
import Actions from "modules/crud/crud-actions";

describe("Crud Reducer Test", () => {
  it("should store entity references in app state", () => {
    const MOCK_ROUTE = "foobar";
    const MOCK_RESULT = [1, 2, 3, 4];

    expect(
      reducer(
        undefined,
        Actions.Creators.entitiesFetched(MOCK_ROUTE, MOCK_RESULT)
      )
    ).toEqual({
      [MOCK_ROUTE]: MOCK_RESULT
    });
  });
});

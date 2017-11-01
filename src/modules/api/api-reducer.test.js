import reducer from "modules/api/api-reducer";
import Actions from "modules/api/api-actions";

describe("API Reducer Tests", () => {
  it("should increment number of calls", () => {
    let state = reducer(undefined, { type: "empty" });
    expect(state.callsInProgress).toBe(0);

    state = reducer(state, Actions.Creators.startLoading());
    expect(state.callsInProgress).toBe(1);

    state = reducer(state, Actions.Creators.startLoading());
    expect(state.callsInProgress).toBe(2);
  });

  it("should decrement number of calls", () => {
    let state = reducer(undefined, { type: "empty" });
    state = reducer(state, Actions.Creators.startLoading());
    state = reducer(state, Actions.Creators.startLoading());

    state = reducer(state, Actions.Creators.stopLoading());
    expect(state.callsInProgress).toBe(1);

    state = reducer(state, Actions.Creators.stopLoading());
    expect(state.callsInProgress).toBe(0);
  });
});

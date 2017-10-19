import reducer from "modules/entity-repository/entity-repository-reducer";
import Actions from "modules/entity-repository/entity-repository-actions";

describe("Entity Repository Reducer", () => {
  it("should merge current state with new", () => {
    const STATE = {
      users: {
        user1: {
          name: "John",
          lastName: "Doe"
        },
        user2: {
          name: "Alice",
          lastName: "bar"
        }
      }
    };

    const modifiedState = reducer(
      STATE,
      Actions.Creators.repositoryHasChanged({
        users: {
          user1: {
            lastName: "QUX"
          }
        }
      })
    );

    expect(modifiedState).toEqual({
      ...STATE,
      users: {
        ...STATE.users,
        user1: {
          name: "John",
          lastName: "QUX"
        }
      }
    });
  });

  it("should replace array values when merging", () => {
    let state = {
      users: {
        user1: {
          name: "John",
          references: [1, 2, 3]
        }
      }
    };

    state = reducer(
      state,
      Actions.Creators.repositoryHasChanged({
        users: { user1: { references: [1] } }
      })
    );

    expect(state).toEqual({
      users: {
        user1: {
          name: "John",
          references: [1]
        }
      }
    });
  });
});

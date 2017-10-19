import { schema } from "normalizr";
import { put } from "redux-saga/effects";

import { normalizeAndStore } from "modules/entity-repository/entity-repository-saga";
import Actions from "modules/entity-repository/entity-repository-actions";

const user = new schema.Entity("users");
const country = new schema.Entity("countries");

user.define({
  country
});

describe("Entity Repository Saga Tests", () => {
  it("should normalize the entity according to schema and return id", () => {
    const it = normalizeAndStore(
      {
        id: "user1",
        name: "John Doe",
        country: {
          id: "USA",
          name: "United States of America"
        }
      },
      user
    );

    expect(it.next()).toEqual({
      done: false,
      value: put(
        Actions.Creators.repositoryHasChanged({
          users: {
            user1: {
              id: "user1",
              name: "John Doe",
              country: "USA"
            }
          },
          countries: {
            USA: {
              id: "USA",
              name: "United States of America"
            }
          }
        })
      )
    });

    expect(it.next()).toEqual({
      done: true,
      value: "user1"
    });
  });
});

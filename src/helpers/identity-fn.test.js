import identityFn from "helpers/identity-fn";

describe("identity-fn test", () => {
  it("should return the same reference", () => {
    const ref = {};
    expect(identityFn(ref)).toBe(ref);
  });
});

import React from "react";
import renderer from "react-test-renderer";

import { FieldAdapter } from "modules/forms/components/form-field";

describe("Form Field Tests", () => {
  it("should not render warning/error when field has not been touched", () => {
    const cmp = renderer.create(
      <FieldAdapter
        input={{}}
        label="foobar"
        type="text"
        meta={{
          touched: false,
          error: "some error",
          warning: "some warning"
        }}
      />
    );

    expect(cmp.toJSON()).toMatchSnapshot();
  });

  it("should render warning/error when field has been touched", () => {
    const cmp = renderer.create(
      <FieldAdapter
        input={{}}
        label="foobar"
        type="text"
        meta={{
          touched: true,
          error: "some error"
        }}
      />
    );

    expect(cmp.toJSON()).toMatchSnapshot();
  });
});

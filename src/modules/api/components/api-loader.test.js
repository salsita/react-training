import React from "react";
import renderer from "react-test-renderer";

import { ApiLoader } from "modules/api/components/api-loader";

describe("API Loader Tests", () => {
  it("should render the loader when loading is true", () => {
    const cmp = renderer.create(<ApiLoader loading />);

    expect(cmp.toJSON()).toMatchSnapshot();
  });

  it("should render nothing when loading is false", () => {
    const cmp = renderer.create(<ApiLoader loading={false} />);

    expect(cmp.toJSON()).toMatchSnapshot();
  });
});

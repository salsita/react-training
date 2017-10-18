import React from "react";
import { mount } from "enzyme";

import { Route } from "modules/routing/components/route";

const StubComponent = () => <div>foobar</div>;

describe("route tests", () => {
  it("should match route when path is prefixed", () => {
    const cmp = mount(
      <Route
        route={{ name: "baz.bar" }}
        component={StubComponent}
        startsWith="baz"
      />
    );

    expect(cmp.find(StubComponent).length).toBe(1);
  });

  it("should not match component when path is not prefixed but sufixed", () => {
    const cmp = mount(
      <Route
        route={{ name: "bar.baz" }}
        component={StubComponent}
        startsWith="baz"
      />
    );

    expect(cmp.find(StubComponent).length).toBe(0);
  });

  it("should match the components when there is exact match", () => {
    const cmp = mount(
      <Route
        route={{ name: "bar.baz" }}
        component={StubComponent}
        endsWith="bar.baz"
      />
    );

    expect(cmp.find(StubComponent).length).toBe(1);
  });

  it("should match the component when starts with segment", () => {
    const cmp = mount(
      <Route
        route={{ name: "bar.baz" }}
        component={StubComponent}
        startsWith="bar"
      />
    );

    expect(cmp.find(StubComponent).length).toBe(1);
  });

  it("should match the exact route", () => {
    const cmp = mount(
      <Route
        route={{ name: "bar.baz.qux" }}
        component={StubComponent}
        exact="bar.baz.qux"
      />
    );

    expect(cmp.find(StubComponent).length).toBe(1);
  });

  it("should not match when there is no exact match", () => {
    const cmp = mount(
      <Route
        route={{ name: "bar.baz.qux" }}
        component={StubComponent}
        exact="bar.baz"
      />
    );

    expect(cmp.find(StubComponent).length).toBe(0);
  });
});

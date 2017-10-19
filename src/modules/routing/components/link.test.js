import React from "react";
import renderer from "react-test-renderer";
import { mount } from "enzyme";
import { actions } from "redux-router5";

import emptyFn from "helpers/empty-fn";
import createStoreWrapper from "tests/create-store-wrapper";
import ConnectedLink, { Link } from "modules/routing/components/link";

describe("Link Component Tests", () => {
  it("should render link as anchor with children nodes inside", () => {
    const cmp = renderer.create(
      <Link onClick={emptyFn}>
        <div>Foobar</div>
      </Link>
    );
    expect(cmp).toMatchSnapshot();
  });

  it("should dispatch navigateTo action with link name and params", () => {
    const { Wrapper, store } = createStoreWrapper();

    const linkName = "foobar";
    const linkParams = { bazbar: 42 };

    const cmp = mount(
      <Wrapper>
        <ConnectedLink name={linkName} params={linkParams}>
          Foobar
        </ConnectedLink>
      </Wrapper>
    );

    cmp.find("a").simulate("click");

    expect(store.dispatch.mock.calls).toEqual([
      [actions.navigateTo(linkName, linkParams)]
    ]);
  });
});

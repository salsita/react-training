import React from "react";
import PropTypes from "prop-types";
import { Provider } from "react-redux";

import buildRouter from "modules/routing/build-router";
import buildStore from "build-store";

const createStoreWrapper = () => {
  const router = buildRouter();
  const store = {
    ...buildStore(router),
    dispatch: jest.fn()
  };

  const Wrapper = ({ children }) => (
    <Provider store={store}>{children}</Provider>
  );
  Wrapper.propTypes = {
    children: PropTypes.node.isRequired
  };

  return { Wrapper, store };
};

export default createStoreWrapper;

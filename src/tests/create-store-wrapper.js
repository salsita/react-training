import React from "react";
import PropTypes from "prop-types";
import { Provider } from "react-redux";

import buildRouter from "modules/routing/build-router";
import buildStore from "build-store";

/**
 * Helper function which creates a Component which is
 * provided with redux-store. You can use returned component
 * and pass down child component which can be connected.
 * Function also returns created store which has spy on
 * dispatch function.
 * 
 * @returns {Object} Wrapper component and created store
 */
const createStoreWrapper = () => {
  const router = buildRouter();

  const store = buildStore(router);

  // Just override store's dispatch
  // because we want to be able to
  // spy on dispatch calls
  store.dispatch = jest.fn(store.dispatch);

  // Create the wrapper which
  // is automatically provided with created
  // store
  const Wrapper = ({ children }) => (
    <Provider store={store}>{children}</Provider>
  );
  Wrapper.propTypes = {
    children: PropTypes.node.isRequired
  };

  return { Wrapper, store };
};

export default createStoreWrapper;

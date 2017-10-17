import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";

import Root from "modules/root/components/root";
import buildStore from "build-store";
import buildRouter from "modules/routing/build-router";

const router = buildRouter();
const store = buildStore(router);

router.start(() => {
  render(
    <Provider store={store}>
      <Root />
    </Provider>,
    document.getElementById("root")
  );
});

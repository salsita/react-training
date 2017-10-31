import React from "react";
import { Portal } from "react-portal";

import ApiErrorToast from "modules/api/components/api-error-toast";
import ApiLoader from "modules/api/components/api-loader";
import Route from "modules/routing/components/route";
import UsersRoute from "modules/users/components/users-route";

const Root = () => (
  <div>
    <h1>This is a testing application</h1>
    <Route startsWith="users" component={UsersRoute} />
    <Portal>
      <ApiErrorToast />
      <ApiLoader />
    </Portal>
  </div>
);

export default Root;

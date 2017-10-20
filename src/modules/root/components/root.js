import React from "react";

import Route from "modules/routing/components/route";
import UsersRoute from "modules/users/components/users-route";

const Root = () => (
  <div>
    <h1>This is a testing application</h1>
    <Route startsWith="users" component={UsersRoute} />
  </div>
);

export default Root;

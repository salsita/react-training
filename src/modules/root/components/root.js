import React from "react";

import Route from "modules/routing/components/route";
import UserDetail from "modules/users/components/user-detail";
import UsersList from "modules/users/components/users-list";
import Link from "modules/routing/components/link";
import { USERS_LIST, USER_DETAIL } from "modules/routing/routes";

const Root = () => (
  <div>
    <h1>This is a testing application</h1>
    <ul>
      <li>
        <Link name={USERS_LIST}>List of users</Link>
      </li>
      <li>
        <Link name={USER_DETAIL} params={{ id: "testing-user" }}>
          User Detail
        </Link>
      </li>
    </ul>
    <Route exact={USERS_LIST} component={UsersList} />
    <Route exact={USER_DETAIL} component={UserDetail} />
  </div>
);

export default Root;

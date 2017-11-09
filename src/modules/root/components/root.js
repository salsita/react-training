import React from "react";
import { Portal } from "react-portal";

import ApiErrorToast from "modules/api/components/api-error-toast";
import ApiLoader from "modules/api/components/api-loader";
import Route from "modules/routing/components/route";
import UsersRoute from "modules/users/components/users-route";

import styled, { injectGlobal } from "styled-components";
import { colors, fontSize, space, Title } from "./../../../styles";

injectGlobal`
  body {
    font-family: Arial, "sans-serif";
    font-size: ${fontSize[0]};
  }
`;

const App = styled.div`
  color: ${colors.black};
  margin: ${space[3]} auto;
  width: 800px;
`;

const Root = () => (
  <App>
    <Title>This is a testing application</Title>
    <Route startsWith="users" component={UsersRoute} />
    <Portal>
      <ApiErrorToast />
      <ApiLoader />
    </Portal>
  </App>
);

export default Root;

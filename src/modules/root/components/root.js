import React from "react";
import { Portal } from "react-portal";

import ApiErrorToast from "modules/api/components/api-error-toast";
import ApiLoader from "modules/api/components/api-loader";
import Route from "modules/routing/components/route";
import UsersRoute from "modules/users/components/users-route";

import styled from "styled-components";
import { colors, fontSize, space } from "./../../../styles";

const App = styled.div`
  color: ${colors.black};
  font-family: Arial, "sans-serif";
  font-size: ${fontSize[0]};
  margin: ${space[3]} auto;
  width: 800px;
`;

const Title = styled.h1`
  font-size: ${fontSize[1]};
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

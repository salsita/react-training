import React from "react";
import { connect } from "react-redux";

import { isLoading } from "modules/api/api-selectors";

import styled, { keyframes } from "styled-components";

const PageLoader = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999999;
  background: rgba(0, 0, 0, 0.8);
`;

const animateLoader = keyframes`
  0% { 
    transform: perspective(120px) rotateX(0deg) rotateY(0deg);
  } 
  50% { 
    transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);
  } 
  100% { 
    transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
  }
`;

const Loader = styled.div`
  width: 40px;
  height: 40px;
  background-color: #ffffff;
  animation: ${animateLoader} 1.2s infinite ease-in-out;
`;

export const ApiLoader = ({ loading }) =>
  loading && (
    <PageLoader>
      <Loader />
    </PageLoader>
  );

const mapStateToProps = state => ({
  loading: isLoading(state)
});

export default connect(mapStateToProps)(ApiLoader);

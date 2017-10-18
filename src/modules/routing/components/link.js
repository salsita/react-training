import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { actions } from "redux-router5";

export const Link = ({ onClick, children }) => (
  <a onClick={onClick}>{children}</a>
);

Link.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
};

const mapDispatchToProps = {
  onClick: actions.navigateTo
};

const ConnectedLink = connect(
  null,
  mapDispatchToProps,
  (stateProps, dispatchProps, ownProps) => ({
    ...ownProps,
    onClick: () => dispatchProps.onClick(ownProps.name, ownProps.params)
  })
)(Link);

ConnectedLink.propTypes = {
  name: PropTypes.string.isRequired,
  params: PropTypes.object // eslint-disable-line react/forbid-prop-types
};

export default ConnectedLink;

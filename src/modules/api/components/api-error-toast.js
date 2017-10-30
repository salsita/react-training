import React from "react";
import { connect } from "react-redux";

import { getError } from "modules/api/api-selectors";

const ApiErrorToast = ({ error }) => error && <div>{error}</div>;

const mapStateToProps = state => ({
  error: getError(state)
});

export default connect(mapStateToProps)(ApiErrorToast);

import React from "react";
import { connect } from "react-redux";

import { isLoading } from "modules/api/api-selectors";

export const ApiLoader = ({ loading }) => loading && <div>Loading...</div>;

const mapStateToProps = state => ({
  loading: isLoading(state)
});

export default connect(mapStateToProps)(ApiLoader);

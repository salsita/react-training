import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { startsWithSegment, endsWithSegment } from "router5-helpers";

import { getCurrentRoute } from "modules/routing/routing-selectors";

export const Route = ({
  route: { name },
  startsWith,
  endsWith,
  exact,
  component: Component
}) => {
  if (startsWith && !endsWith && !exact) {
    return startsWithSegment(name)(startsWith) && <Component />;
  } else if (endsWith && !startsWith && !exact) {
    return endsWithSegment(name)(endsWith) && <Component />;
  } else if (exact && !startsWith && !endsWith) {
    return exact === name && <Component />;
  } else {
    throw new Error(
      "Invalid state, you need to either provide startsWith, endsWith or exact prop"
    );
  }
};

Route.propTypes = {
  route: PropTypes.shape({
    name: PropTypes.string.isRequired
  }).isRequired,
  startsWith: PropTypes.string,
  endsWith: PropTypes.string,
  exact: PropTypes.string,
  component: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  route: getCurrentRoute(state)
});

export default connect(mapStateToProps)(Route);

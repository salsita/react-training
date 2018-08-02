import React from 'react';
import PropTypes from 'prop-types';

class Header extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired
  };

  render() {
    return <h1>{this.props.title}</h1>;
  }
}

export default Header;

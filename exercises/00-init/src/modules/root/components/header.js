import React from 'react';
import PropTypes from 'prop-types';

class Header extends React.Component {
    render() {
      return <h1>{this.props.title}</h1>;
    }

    static propTypes = {
        title: PropTypes.string
    }
}

export default Header
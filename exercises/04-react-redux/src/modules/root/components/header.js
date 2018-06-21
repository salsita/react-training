import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

const Header = ({ title }) => <h1>{title}</h1>;

// class Header extends React.Component {
//   render() {
//     console.log('Header.render');
//     return <h1>{this.props.title}</h1>;
//   }
// }

// class Header extends React.PureComponent {
//   render() {
//     console.log('Header.render');
//     return <h1>{this.props.title}</h1>;
//   }
// }

Header.propTypes = {
  title: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  title: state.users.title
});

export default connect(mapStateToProps)(Header);

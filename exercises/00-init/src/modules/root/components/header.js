import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Header = (props) => <h1>{props.title}</h1>;

Header.propTypes = {
    title: PropTypes.string
}

const mapStateToProps = (state) => ({
    title: state.users.title
});

export default connect(mapStateToProps)(Header)
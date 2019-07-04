import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {getTitle} from 'modules/users/users-selectors';

const Header = (props) => <h1>{props.title}</h1>;

Header.propTypes = {
    title: PropTypes.string
}

const mapStateToProps = (state) => ({
    title: getTitle(state)
});

export default connect(mapStateToProps)(Header)
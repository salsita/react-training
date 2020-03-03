import React from "react";
import PropTypes from "prop-types";

export class Header extends React.Component {
    render() {
        return <h1>{this.props.title}</h1>;
    }
}

Header.propTypes = {
    title: PropTypes.string.isRequired
};

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ErrorIndicator from '../error-indicator';

class ErrorBoundry extends Component {
    state = {
        isWasError: false,
    }

    componentDidCatch() {
        this.setState({ isWasError : true });
    }

    render() {
        return this.state.isWasError ? <ErrorIndicator /> : this.props.children;
    }
}

export default ErrorBoundry;

ErrorBoundry.defaultProps = {
    isWasError: false,
};

ErrorBoundry.propTypes = {
    isWasError: PropTypes.bool,
};
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ErrorIndicator from '../error-indicator';

class ErrorBoundry extends Component {
  state = {
    isWasError: false
  };

  componentDidCatch() {
    this.setState({ isWasError: true });
  }

  render() {
    const { children } = this.props;
    const { isWasError } = this.state;

    return isWasError ? <ErrorIndicator /> : children;
  }
}

export default ErrorBoundry;

ErrorBoundry.defaultProps = {
  children: ''
};

ErrorBoundry.propTypes = {
  children: PropTypes.node
};

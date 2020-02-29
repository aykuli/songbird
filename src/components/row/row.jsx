import React from 'react';
import PropTypes from 'prop-types';
import List from '../birds-list';
import Arrow from '../arrow';

import './row.scss';

const Row = ({ left, right }) => {
  return (
    <div className="row">
      {left}
      {right}
    </div>
  );
};

Row.defaultProps = {
  left: List,
  right: Arrow
};

Row.propTypes = {
  left: PropTypes.node,
  right: PropTypes.node
};

export default Row;

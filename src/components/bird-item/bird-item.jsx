import React from 'react';
import PropTypes from 'prop-types';

import './bird-item.scss';

const BirdItem = ({ i, name, isRight, isWrong }) => {
  const rightMarker = isRight ? 'bird-item__marker--right' : '';
  const markerStyle = isWrong ? 'bird-item__marker--wrong' : rightMarker;
  return (
    <li className="bird-item" data-count={i}>
      <div className={`bird-item__marker ${markerStyle}`} />
      <span>{name}</span>
    </li>
  );
};

export default BirdItem;

BirdItem.defaultProps = {
  i: 0,
  name: '',
  isRight: false,
  isWrong: false
};

BirdItem.propTypes = {
  i: PropTypes.number,
  name: PropTypes.string,
  isRight: PropTypes.bool,
  isWrong: PropTypes.bool
};

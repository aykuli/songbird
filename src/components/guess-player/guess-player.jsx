import React from 'react';
import PropTypes from 'prop-types';

import AudioPlayer from '../audio-player';

import './guess-player.scss';

const GuessPlayer = ({ src, birdName, audioSrc, isPause }) => {
  // eslint-disable-next-line
  const link = src ? src : require('./imgs/placeholder.jpg').default;
  
  return (
    <div className="guess">
      <img className="guess__img" src={link} alt="bird" width="200" height="200" />
      <div className="guess__wrap">
        <h3 className="guess__title">{birdName}</h3>
        <AudioPlayer url={audioSrc} isPause={isPause} />
      </div>
    </div>
  );
};

export default GuessPlayer;

GuessPlayer.defaultProps = {
  isPause: false,
  // eslint-disable-next-line global-require
  src: require('./imgs/placeholder.jpg').default,
  birdName: '',
  audioSrc: ''
};

GuessPlayer.propTypes = {
  isPause: PropTypes.bool,
  src: PropTypes.string,
  birdName: PropTypes.string,
  audioSrc: PropTypes.string
};

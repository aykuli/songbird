import React from 'react';
import PropTypes from 'prop-types';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/src/styles.scss';

import './guess-player.scss';

const GuessPlayer = ({ src, birdName, audioSrc }) => {
  // eslint-disable-next-line
  const link = src ? src : require('./imgs/placeholder.jpg').default;
  return (
    <div className="guess">
      <img className="guess__img" src={link} alt="bird" width="200" height="200" />
      <div className="guess__wrap">
        <h3 className="guess__title">{birdName}</h3>
        <AudioPlayer
          src={audioSrc}
          showJumpControls={false}
          showLoopControl={false}
          showDownloadProgress
          autoPlayAfterSrcChange={false}
        />
      </div>
    </div>
  );
};

export default GuessPlayer;

GuessPlayer.defaultProps = {
  // eslint-disable-next-line global-require
  src: require('./imgs/placeholder.jpg').default,
  birdName: '',
  audioSrc: ''
};

GuessPlayer.propTypes = {
  src: PropTypes.string,
  birdName: PropTypes.string,
  audioSrc: PropTypes.string
};

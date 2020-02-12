/* eslint-disable global-require */
import React from 'react';
import PropTypes from 'prop-types';

 const SoundIndicator = ({ whatSound }) => {
    let src;
    switch(whatSound) {
        case 'wrong':
            src = require('./voices/wrong-answer-sound.mp3').default;
            break;
        case 'right':
            src = require('./voices/right-sound.mp3').default;
            break;
        default:
            src = '';
    }

    return (
      <audio autoPlay>
        <source src={src} type="audio/mp3" />
        <track // это меня попросил еслинт
          default
          kind="captions"
          srcLang="ru"
          src="/"
        />
      </audio>
    )
}

export default SoundIndicator;

SoundIndicator.defaultProps = {
    whatSound: 'none',
};

SoundIndicator.propTypes = {
    whatSound: PropTypes.string,
};
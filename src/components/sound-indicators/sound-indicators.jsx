import React from 'react';
import PropTypes from 'prop-types';

const SoundIndicator = ({ whatSound, isIndicate }) => {
  const getSound = (sound) => {
    switch(sound) {
      case 'wrong':
         // eslint-disable-next-line
        return require('./voices/wrong-answer-sound.mp3').default;
      case 'right':
         // eslint-disable-next-line
        return require('./voices/right-sound.mp3').default;
      default:
        return '';
    }
  }
  const srcUrl = getSound(whatSound);
  return isIndicate ? (
    <audio    
      src={srcUrl}
      hidden
      autoPlay
      controls
    >
      <track src="" kind="captions" srcLang="ru" label="sound_captions" />
    </audio>
  ) : null;
}

export default SoundIndicator;

SoundIndicator.defaultProps = {
  isIndicate: false,
  whatSound: 'none',
};

SoundIndicator.propTypes = {
  isIndicate: PropTypes.bool,
  whatSound: PropTypes.string,
};
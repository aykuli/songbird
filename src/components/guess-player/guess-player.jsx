import React from 'react';
import PropTypes from 'prop-types';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/src/styles.scss';

import './guess-player.scss';

const GuessPlayer = ({ src, birdName, audioSrc }) => {
    return (
        <div className="guess">
            <img
                className="guess__img"
                src={src ? src : require('./imgs/placeholder.jpg').default}
                alt="bird"
                width="200"
                height="200" />
            <div className="guess__wrap">
                <h3 className="guess__title">
                    {birdName}
                </h3>
                <AudioPlayer
                    src={audioSrc}
                    showJumpControls={false}
                    showLoopControl={false}
                    showDownloadProgress={true}                  
                />
            </div>
        </div>
    );
}

export default GuessPlayer;

GuessPlayer.defaultProps = {
    src: require('./imgs/placeholder.jpg').default,
    birdName: '',
    audioSrc: '',
};

GuessPlayer.propTypes = {
    src: PropTypes.string,
    birdName: PropTypes.string,
    audioSrc: PropTypes.string,
};
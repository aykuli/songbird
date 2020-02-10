import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/src/styles.scss';

import './guess-player.scss';

const GuessPlayer = (props) => {
    const { src, birdName, audioSrc } = props;
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
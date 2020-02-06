import React from 'react';

import './player.scss';

const Player = (props) => {
    const { src, birdName, audioSource } = props;
    return (
        <div className="player">
            <img
                className="player__img"
                src={src}
                alt="bird"
                width="200"
                height="200" />
            <div className="player__guess">
                <h3 className="player__title">
                    {birdName}
                </h3>
                <figure>
                    <figcaption className="hidden"></figcaption>
                    <audio
                        controls
                        src={audioSource}
                        className="player__audio">
                            Your browser does not support the audio lement.
                    </audio>
                </figure>
            </div>
        </div>
    );
}

export default Player;
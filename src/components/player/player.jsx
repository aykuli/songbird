import React from 'react';

import './player.scss';

const Player = (props) => {
    const { src, birdName } = props;
    return (
        <div className="player">
            <img
                className="player__img"
                src={src}
                alt="bird" />
            <div className="player__guess">
                <h3 className="player__title">
                    {birdName}
                </h3>
                
            </div>
        </div>
    );
}

export default Player;
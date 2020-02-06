import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/src/styles.scss';

import ReactAudioPlayer from 'react-audio-player';

import './player.scss';

const Player = (props) => {
    const { src, birdName, audioSource } = props;
    return (
        <div className="guess">
            <img
                className="guess__img"
                src={src}
                alt="bird"
                width="200"
                height="200" />
            <div className="guess__wrap">
                <h3 className="guess__title">
                    {birdName}
                </h3>
                <AudioPlayer
                    src={audioSource}
                    showJumpControls={false}
                    showSkipControls={false}
                    showLoopControl={false}
                    // other props here
                />

                <ReactAudioPlayer
                src={audioSource}
                controls
                />
                {/* <div id="player"> 
                    <audio id="audio" src={audioSource} />
                    
                    <button id="playpause-guess">
                        <div className="play-btn"></div>
                    </button>
                    
                    <div id="progressbar-guess"></div>
                    
                    <div id="volume-guess"></div>
                </div>
                <figure>
                    <figcaption className="hidden"></figcaption>
                    <audio
                        controls
                        src={audioSource}
                        className="guess__audio">
                            Your browser does not support the audio lement.
                    </audio>
                </figure> */}
            </div>
        </div>
    );
}

export default Player;
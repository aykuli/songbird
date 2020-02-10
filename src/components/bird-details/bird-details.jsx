import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/src/styles.scss';
import Arrow from '../arrow';

import './bird-details.scss';

const Card = ({ title, latinName, desc, audioSrc, imgSrc }) => {
    return (
        <div className="row__child bird-details">
            <img 
                className="bird-details__img"
                src={imgSrc}
                alt="bird" />
            <div className="bird-details__info">
                <h3 className="bird-details__title">{title}</h3>
                <p className="bird-details__latin-name">{latinName}</p>
                <AudioPlayer
                    src={audioSrc}
                    showJumpControls={false}
                    showLoopControl={false}
                    showDownloadProgress={true}                  
                />
            </div>
            <div className="bird-details__desc">{desc}</div>
        </div>
    )
}

const BirdDetails = ({ isChosen, details, imgSrc }) => (
    (isChosen && details)
        ? <Card 
            title={details.name} 
            latinName={details.species}
            desc={details.description}
            audioSrc={details.audioUrl}
            imgSrc={imgSrc}/>
        : <Arrow />
);

export default BirdDetails;
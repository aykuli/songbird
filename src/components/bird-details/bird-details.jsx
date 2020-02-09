import React, { useEffect, useState } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/src/styles.scss';

import './bird-details.scss';

const Arrow = () => (
    <div className="arrow__wrap">
        <div className="arrow__text">
            <div className="arrow"></div>
            <span>Выберите вариант</span>
        </div>
    </div>
)

const Card = ({ title, latinName, desc, audioSrc, imgSrc }) => {
    const [url, setUrl] = useState('/');

    useEffect(() => {
        let canceled = false;
        if (!canceled) setUrl(audioSrc);
        return () => canceled=true;

    }, [audioSrc]);

    return (
        <>
            <img 
                className="bird-details__img"
                src={imgSrc}
                alt="bird" />
            <div className="bird-details__info">
                <h3 className="bird-details__title">{title}</h3>
                <p className="bird-details__latin-name">{latinName}</p>
                <AudioPlayer
                    src={url}
                    showJumpControls={false}
                    showLoopControl={false}
                    showDownloadProgress={true}                  
                />
            </div>
            <div className="bird-details__desc">{desc}</div>
        </>
    )
}

const BirdDetails = ({ isChosen, details, imgSrc }) => (
    <div className="row__child bird-details">
        {!(isChosen && details)
            ? <Arrow />
            : <Card 
                title={details.name} 
                latinName={details.species}
                desc={details.description}
                audioSrc={details.audioUrl}
                imgSrc={imgSrc}/> }
    </div>
);

export default BirdDetails;
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

const Card = ({ title, latinName, desc, audioSource }) => {
    const [url, setUrl] = useState('/');

    useEffect(() => {
        console.log('useEffect')
        let canceled = false;
        if (!canceled) setUrl(audioSource);
        return () => canceled=true;

    }, [audioSource]);

    return (
        <>
            <img 
                className="bird-details__img"
                src="https://placeimg.com/200/200/nature/grayscale"
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

const BirdDetails = ({ isChosen, details }) => (
    <div className="row__child bird-details">
        {!(isChosen && details)
            ? <Arrow />
            : <Card 
                title={details.name} 
                latinName={details.species}
                desc={details.description}
                audioSource={details.audioUrl}/> }
    </div>
);

export default BirdDetails;
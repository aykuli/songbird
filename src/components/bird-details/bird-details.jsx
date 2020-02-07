import React from 'react';
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
                    src={audioSource}
                    showJumpControls={false}
                    showLoopControl={false}
                    showDownloadProgress={true}                  
                />
            </div>
            <div className="bird-details__desc">{desc}</div>
        </>
    )
}

const BirdDetails = ({ isRight }) => {
    return (
        <div className="row__child bird-details">
            {!isRight 
                ? <Arrow />
                : <Card 
                    title={'Ворона'} 
                    latinName={"Corvus Corax"}
                    desc={'Oчень гадкая птица однако, громкая и вредная, умеeт копать землю и добывать посаженные в землю семена, предварительно понаблюдав за огородниками.'}
                    audioSource={'https://www.xeno-canto.org/sounds/uploaded/XIQVMQVUPP/XC518684-Grands%20corbeaux%2009012020%20Suzon.mp3'}/> }
        </div>
    )
}

export default BirdDetails;
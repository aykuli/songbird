import React from 'react';

import Header from '../header';
import GuessPlayer from '../guess-player';
import BirdsList from '../birds-list';
import Row from '../row';
import BirdDetails from '../bird-details';
import NextLevel from '../next-level';

import './app.scss';

const App = () => (
    <div className="container">
        <Header score={15}/>
        <GuessPlayer 
            birdName={'Соловей'}
            audioSource={'https://www.xeno-canto.org/sounds/uploaded/XIQVMQVUPP/XC518684-Grands%20corbeaux%2009012020%20Suzon.mp3'} />
        <Row
            left={<BirdsList />}
            right={<BirdDetails isRight={true}/>} />
        <NextLevel isToNext={true} />    
    </div>
);

export default App;
import React from 'react';

import Header from '../header';
import Player from '../player';

import './app.scss';

const App = () => (
    <div className="container">
        <Header score={15}/>
        <Player 
            src={'./placeholder.jpg'} 
            birdName={'Соловей'}
            audioSource={'https://www.xeno-canto.org/sounds/uploaded/XIQVMQVUPP/XC518684-Grands%20corbeaux%2009012020%20Suzon.mp3'} />
    </div>
);

export default App;
import React from 'react';

import Header from '../header';
import Player from '../player';

import './app.scss';

const App = () => (
    <div className="container">
        <Header score={15}/>
        <Player src={15} birdName={'***'} />
    </div>
);

export default App;
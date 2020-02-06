import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app';

import XenoCantoAPI from './services/xeno-canto';
import BirdImage from './services/bird-images';

const birdData = new XenoCantoAPI();
const bird = birdData.getBird()
    .then(res => res.json())
    .then(data => console.log('data: ', data));

const birdImage = new BirdImage();
const img = birdImage.getImage('summer')
    .then(data => console.log(data.url));


ReactDOM.render(<App/ >, document.getElementById('root'));
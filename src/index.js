import React from 'react';
import ReactDOM from 'react-dom';


import App from './components/app';

import XenoCantoAPI from './services/xeno-canto';
import BirdImage from './services/bird-images';
import birdsData from './services/birdsData';

async function f() {
    const bird = birdsData[0];
    console.log(bird)
    const birdData = new XenoCantoAPI();
    // const birdAudio = birdData.getBird(bird.audioTag)
        // .then(data => console.log('birds records data: ', data));

    const birdImage = new BirdImage();
    // const img = await birdImage.getImage(bird.imgTag)
    //     .then(data => console.log('images data: ', data));

}
f();
ReactDOM.render(<App/ >, document.getElementById('root'));
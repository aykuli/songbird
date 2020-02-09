import React from 'react';
import someFunc from '../../utils/spirit-bg';

import './winner-page.scss';


const WinnerPage = ({ isCanvasReady}) => {
    return (
        <div className="winner-page__wrap"
        onMouseEnter={() => {
            console.log('move')
            someFunc();
        }}>
            <div className="winner-page">
                <h1 className="winner-page__title" >Поздравляю!</h1>
                <p className="winner-page__text">Вы набрали максимальный балл!</p>
                <button className="winner-page__btn">Скачать сертификат</button>
            </div>
            {/* <canvas id="winner-canvas" /> */}
        </div>
    );
};

export default WinnerPage;
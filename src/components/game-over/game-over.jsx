import React from 'react';

import './game-over.scss';

const GameOver = ({ score, handleGameStart }) => {
    return (
        <div className="game-over">
            <div className="game-over__title--wrap">
                <img 
                    className="game-over__title--decor game-over__title--decor-reverse" 
                    src={require("./imgs/confetti.png").default} />
                <h2 className="game-over__title">Поздравляем!</h2>
                <img 
                    className="game-over__title--decor" 
                    src={require("./imgs/confetti.png").default} />
            </div>
            <p className="game-over__txt">Вы набрали <span className="game-over__score">{score}</span> из максимальных 30-ти.</p>
            <button 
                className="game-over__btn" 
                onClick={handleGameStart}>Хочу играть еще!</button>
        </div>
)
};

export default GameOver;
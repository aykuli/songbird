import React from 'react';
import PropTypes from 'prop-types';

import './game-over.scss';

const GameOver = ({ score, maxScore, handleGameStart }) => {
  return (
    <div className="game-over">
      <div className="game-over__title--wrap">
        <img
          className="game-over__title--decor game-over__title--decor-reverse"
          // eslint-disable-next-line global-require
          src={require('./imgs/confetti.png').default}
          alt="!!!"
        />
        <h2 className="game-over__title">Поздравляем!</h2>
        <img
          className="game-over__title--decor"
          // eslint-disable-next-line global-require
          src={require('./imgs/confetti.png').default}
          alt="!!!"
        />
      </div>
      <p className="game-over__txt">
        Вы набрали
        <span className="game-over__score">{score}</span>
        из максимальных
        {maxScore}
        .
      </p>
      <button className="game-over__btn" onClick={handleGameStart} type="button">
        Хочу играть еще!
      </button>
    </div>
  );
};

export default GameOver;

GameOver.defaultProps = {
  score: 0,
  maxScore: 0,
  handleGameStart: () => {}
};

GameOver.propTypes = {
  score: PropTypes.number,
  maxScore: PropTypes.number,
  handleGameStart: PropTypes.func
};

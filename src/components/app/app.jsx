/* eslint-disable no-nested-ternary */
/* eslint-disable import/no-dynamic-require */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Header from '../header';
import GuessPlayer from '../guess-player';
import BirdsList from '../birds-list';
import Row from '../row';
import BirdDetails from '../bird-details';
import NextLevel from '../next-level';
import CategoryList from '../category-list';
import GameOver from '../game-over';
import WinnerPage from '../winner-page';
import SoundIndicator from '../sound-indicators';

// import AudioPlayer from '../audio-player';
import ErrorBoundry from '../error-boundry';

import './app.scss';

function App({ data }) {
  const [score, setScore] = useState(0);

  const [currentIndex, setCurrentIndex] = useState(null);
  const [wrongIndexes, setWrongIndexes] = useState(new Set());
  const [indexRight, setIndexRight] = useState(null);
  const [rightAnswer, setRightAnswer] = useState(null);
  const [categoryIndex, setCategoryIndex] = useState(0);
  const [whatSound, setWhatSound] = useState('none');

  const [isRight, setIsRight] = useState(false);
  const [isRoundEnd, setIsRoundEnd] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);
  const [isWinner, setIsWinner] = useState(false);
  const [isIndicate, setIsIndicate] = useState(true);

  const [isPause, setIsPause] = useState(false);

  const categories = (() => data.map(item => item[0].category))();
  const maxScore = categories.length * (data[0].length - 1);

  useEffect(() => {
    if (!isGameOver) {
      const random = Math.floor(Math.random() * categories.length);
      // eslint-disable-next-line no-console
      console.log('------------------------\n\nВерный ответ', data[categoryIndex][random].name, '\n\n------------------------');
      setIndexRight(random);
      setRightAnswer(data[categoryIndex][random].name);
    }
  }, [categoryIndex]);

  const onGetAnswer = ({ target }) => {
    // вне зависимости от того ,куда кликнули, надо вытащить азвание птицы
    const answer = target.tagName === 'LI' ? target.children[1].innerText : target.innerText;
    setCurrentIndex(target.dataset.count);

    if (answer === rightAnswer) {
      // правильный ответ выбран, один кон закончен
      setIsRight(true);
      setIsRoundEnd(true);
      setScore(score + data[0].length - 1 - wrongIndexes.size);
      setWhatSound('right');
      setIsPause(true);
      setIsIndicate(false);
    } else if (!isRoundEnd) {
      // если кон не закончен, то продолжаем отмечать оишбочные варианты
      setWrongIndexes(prevSet => {
        if (prevSet.has(target.dataset.count)) {
          return prevSet;
        }
        setWhatSound('wrong');
        return new Set([...Array.from(prevSet), target.dataset.count]);
      });
    }

    setIsIndicate(!isRight);
  };

  const clearStates = () => {
    setCurrentIndex(null);
    setWrongIndexes(new Set());
    setIndexRight(null);
    setIsRight(false);
    setIsRoundEnd(false);
    setWhatSound('none');
    setIsIndicate(true);
  };

  const handleNextLevel = () => {
    if (categoryIndex === categories.length - 1) {
      if (+score === +maxScore) {
        clearStates();
        setIsWinner(true);
      }
      setIsGameOver(true);
    }

    if (isRoundEnd) {
      setCategoryIndex(prev => prev + 1);
      clearStates();
    }
  };

  const handleGameStart = () => {
    setIsGameOver(false);
    setIsWinner(false);
    setCategoryIndex(0);
    setScore(0);
    clearStates();
  };

  // eslint-disable-next-line global-require
  const getImg = imgTag => require(`../../dataBase/imgs/${imgTag}.jpg`);

  const Indicator = () => {
    return (
      <SoundIndicator 
        whatSound={whatSound}
        isIndicate={isIndicate}
      />
    )
  }

  return (
    <ErrorBoundry>
      <div className="container">
        <Header score={score} maxScore={maxScore} />
        {isWinner 
          ?  <WinnerPage handleGameStart={handleGameStart} /> 
          : isGameOver
          ? <GameOver score={score} handleGameStart={handleGameStart} maxScore={maxScore} />
          : (
            <>
              <GuessPlayer
                birdName={isRight ? data[categoryIndex][indexRight].name : '***'}
                audioSrc={indexRight ? data[categoryIndex][indexRight].audioUrl : data[categoryIndex][0].audioUrl}
                src={isRight ? getImg(data[categoryIndex][indexRight].imgTag).default : null}
                isPause={isPause}
              />
              <CategoryList
                categories={categories}
                currentCategory={indexRight ? data[categoryIndex][indexRight].category : data[categoryIndex][0].category}
              />
              <Row
                left={(
                  <BirdsList
                    items={data[categoryIndex]}
                    onGetAnswer={onGetAnswer}
                    indexRight={isRight ? +indexRight : null}
                    wrongIndexes={Array.from(wrongIndexes)}
                  />
            )}
                right={(
                  <BirdDetails
                    isChosen={currentIndex}
                    details={indexRight ? data[categoryIndex][currentIndex] : null}
                    imgSrc={currentIndex ? getImg(data[categoryIndex][currentIndex].imgTag).default : null}
                  />
            )}
              />
              <NextLevel 
                isToNext={isRoundEnd} 
                handleNextLevel={handleNextLevel}
              />              
            </>
          )}
        {(isIndicate) ? (
          <Indicator />
              ) : null}
              
      </div>
    </ErrorBoundry>
  );
}
export default App;
App.defaultProps = {
  data: [[]]
};
App.propTypes = {
  data: PropTypes.arrayOf(PropTypes.array)
};
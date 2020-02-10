import React, {useState, useEffect} from 'react';

import Header from '../header';
import GuessPlayer from '../guess-player';
import BirdsList from '../birds-list';
import Row from '../row';
import BirdDetails from '../bird-details';
import NextLevel from '../next-level';
import CategoryList from '../category-list';
import GameOver from '../game-over';
import WinnerPage from '../winner-page';
import ErrorBoundry from '../error-boundry';

import './app.scss';

function App ({ data }) {
    const [score, setScore] = useState(0);

    const [currentIndex, setCurrentIndex] = useState(null);
    const [wrongIndexes, setWrongIndexes] = useState(new Set());
    const [indexRight, setIndexRight] = useState(null);
    const [categoryIndex, setCategoryIndex] = useState(0);
    
    const [isRight, setIsRight] = useState(false);
    const [isRoundEnd, setIsRoundEnd] = useState(false);
    const [isGameOver, setIsGameOver] = useState(false);
    const [isWinner, setIsWinner] = useState(false);

    const categories = (() => data.map(item => item[0].category))();
    const maxScore = categories.length * (data[0].length - 1);
    
    useEffect(() => {
        const random = Math.floor(Math.random() * categories.length);
        setIndexRight(random);
    }, [categoryIndex]);

    const onGetAnswer = ({ target }) => {
        // вне зависимости от того ,куда кликнули, надо вытащить азвание птицы
        const answer = target.tagName === 'LI' ? target.children[1].innerText : target.innerText;        
        const rightAnswer = data[categoryIndex][indexRight].name;
        setCurrentIndex(target.dataset.count);

        if (answer === rightAnswer) {
            // правильный ответ выбран, один кон закончен
            setIsRight(true);
            setIsRoundEnd(true);
            setScore(score + data[0].length - 1 - wrongIndexes.size);
            
        } else if (!isRoundEnd) {
            // если кон не закончен, то продолжаем отмечать оишбочные варианты     
            setWrongIndexes(prevSet => prevSet.has(target.dataset.count) 
                    ? prevSet 
                    : new Set([...Array.from(prevSet), target.dataset.count])
            );
        }
    }
    
    const nextLevel = () => {
        if (isRoundEnd) {            
            setCategoryIndex(prev => prev + 1);
            clearStates();
        }
        if (categoryIndex === categories.length - 1) {
            if (+score === +maxScore - data[0].length + 1) {
                setIsWinner(true);
            }
            setIsGameOver(true);            
        }           
    }

    const clearStates = () => {
        setCurrentIndex(null);
        setWrongIndexes(new Set());
        setIndexRight(null);
        setIsRight(false);
        setIsRoundEnd(false);
    }

    const handleGameStart = () => {
        setIsGameOver(false);
        setIsWinner(false);
        setCategoryIndex(0);
        setScore(0);
        clearStates();
    }

    const getImg = (imgTag) => require(`../../dataBase/imgs/${imgTag}.jpg`);

    const ToShow = () => {
        if (isWinner) {
            return <WinnerPage handleGameStart={handleGameStart} />
        }

        if (isGameOver) {
            return <GameOver 
                        score={score}
                        handleGameStart={handleGameStart}
                        maxScore={maxScore} />
        }

        return (
            <>
                <GuessPlayer 
                    birdName={isRight ? data[categoryIndex][indexRight].name : '***'}
                    audioSrc={indexRight 
                                    ? data[categoryIndex][indexRight].audioUrl 
                                    : data[categoryIndex][0].audioUrl}
                    src={isRight ? getImg(data[categoryIndex][indexRight].imgTag).default : null} 
                    />
                <CategoryList 
                    categories={categories}
                    currentCategory={indexRight 
                                        ? data[categoryIndex][indexRight].category 
                                        : data[categoryIndex][0].category}/>
                <Row
                    left={<BirdsList 
                            items={data[categoryIndex]}                        
                            onGetAnswer={onGetAnswer}
                            indexRight={isRight ? indexRight : null}
                            wrongIndexes={wrongIndexes} />}
                    right={<BirdDetails 
                        isChosen={currentIndex}
                        details={indexRight ? data[categoryIndex][currentIndex] : null}
                        imgSrc={currentIndex ? getImg(data[categoryIndex][currentIndex].imgTag).default : null} />} />   
                <NextLevel
                    isToNext={isRoundEnd}
                    nextLevel={nextLevel} />
            </>
        )
    }

    return (
        <ErrorBoundry>
        <div className="container">
            <Header score={score} maxScore={maxScore} />
            <ToShow/>
        </div>
        </ErrorBoundry>
    );
}
export default App;
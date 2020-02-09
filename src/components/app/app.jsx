import React, {useState, useEffect} from 'react';

import Header from '../header';
import GuessPlayer from '../guess-player';
import BirdsList from '../birds-list';
import Row from '../row';
import BirdDetails from '../bird-details';
import NextLevel from '../next-level';
import CategoryList from '../category-list';
import GameOver from '../game-over';

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

    const getCategories = () => data.map(item => item[0].category);

    getCategories();

    const categories = getCategories();

    useEffect(() => {
        const random = Math.floor(Math.random() * 6);
        setIndexRight(random);
        console.log('************************************************************');
        console.log('верная птица ', data[categoryIndex][random].name);
        console.log('');
    }, [categoryIndex]);

    const onGetAnswer = ({ target }) => {
        // вне зависимости от того ,куда кликнули, надо вытащить азвание птицы
        const answer = target.tagName === 'LI' ? target.children[1].innerText : target.innerText;
        
        const rightAnswer = data[categoryIndex][indexRight].name;
        setCurrentIndex(target.dataset.count);

        if (answer === rightAnswer) {
            // правильный ответ выбрать, один кон закончен
            setIsRight(true);
            setIsRoundEnd(true);
            setScore(prev => prev + 5 - wrongIndexes.size);
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
            console.log('next clicked');
            if (categoryIndex === categories.length - 1) {
                setIsGameOver(true);
            } else {
                setCategoryIndex(prev => prev + 1);
                setCurrentIndex(null);
                setWrongIndexes(new Set());
                setIndexRight(null);
                setIsRight(false);
                setIsRoundEnd(false);
            }
        }                  
    }

    const getImg = (imgTag) => require(`../../dataBase/imgs/${imgTag}.jpg`);    

    return (
        <div className="container">
            <Header score={score}/>
            {setIsGameOver 
                ? <GameOver /> 
                : (
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
                                    details={currentIndex ? data[categoryIndex][currentIndex] : null}
                                    imgSrc={currentIndex ? getImg(data[categoryIndex][currentIndex].imgTag).default : null} />} />   
                        <NextLevel 
                            isToNext={isRoundEnd}
                            nextLevel={nextLevel} />
                </>
                )
            }
        </div>
    );
}
export default App;
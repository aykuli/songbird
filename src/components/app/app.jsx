import React, {useState, useEffect} from 'react';

import Header from '../header';
import GuessPlayer from '../guess-player';
import BirdsList from '../birds-list';
import Row from '../row';
import BirdDetails from '../bird-details';
import NextLevel from '../next-level';
import CategoryList from '../category-list';

import './app.scss';

const items = [
    'Ворон', 'Гусь', 'Голубь', 'Воробей', 'Синица', 'Канарейка'
];
const categories = ['Воробьиные', 'Певчие', 'Домашние', 'Лесные', 'Морские', 'Перелетные'];

function App ({ data }) {
    const [score, setScore] = useState(0);
    const [currentIndex, setCurrentIndex] = useState(null);

    const [indexWrong, setIndexWrong] = useState(null);
    const [wrongIndexes, setWrongIndexes] = useState(new Set());
    const [indexRight, setIndexRight] = useState(null);
    const [isRight, setIsRight] = useState(false);
    const [isRoundEnd, setIsRoundEnd] = useState(false);

    const [category, setCategory] = useState('');
    const [categoryIndex, setCategoryIndex] = useState(0);


    useEffect(() => {
        const random = Math.floor(Math.random() * 6);
        setIndexRight(random);
        console.log('************************************************************');
        console.log('верная птица ', data[categoryIndex][random].name);
        console.log('');
    }, [category]);

    const onGetAnswer = ({ target }) => {
        const answer = target.tagName === 'LI' ? target.children[1].innerText : target.innerText;
        const rightAnswer = data[categoryIndex][indexRight].name;
        
        setCurrentIndex(target.dataset.count);

        if (answer === rightAnswer) {
            // правильный ответ выбрать, один кон закончен
            setIsRight(true);
            setIsRoundEnd(true);
        } else if (!isRoundEnd) {       
            // если кон не закончен, то продолжаем отмечать оишбочные варианты     
            setWrongIndexes(prevSet => prevSet.has(target.dataset.count) 
                    ? prevSet 
                    : new Set([...Array.from(prevSet), target.dataset.count])
            );
        }
    }

    return (
        <div className="container">
            <Header score={score}/>
            <GuessPlayer 
                birdName={isRight ? data[categoryIndex][indexRight].name : '***'}
                audioSource={indexRight ? data[categoryIndex][indexRight].audioUrl : data[categoryIndex][0].audioUrl} />
                <CategoryList 
                    categories={categories}
                    currentCategory={indexRight ? data[categoryIndex][indexRight].category : data[categoryIndex][0].category}/>
            <Row
                left={<BirdsList 
                        items={data[categoryIndex]}                        
                        onGetAnswer={onGetAnswer}
                        indexRight={isRight ? indexRight : null}
                        wrongIndexes={wrongIndexes} />}
                right={<BirdDetails isRight={false}/>} />   
            <NextLevel isToNext={false} />
        </div>
    );
}
export default App;
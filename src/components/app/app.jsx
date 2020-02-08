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
    const [currentIndex, setCurrentIndex] = useState(0);

    const [indexWrong, setIndexWrong] = useState(0);
    const [indexRight, setIndexRight] = useState(0);
    const [isRight, setIsRight] = useState(false);
    const [isWrong, setIsWrong] = useState(false);

    const [category, setCategory] = useState('');
    const [categoryIndex, setCategoryIndex] = useState(0);


    useEffect(() => {
        const random = Math.floor(Math.random() * 6);
        setIndexRight(() => random);
        console.log(data[categoryIndex][random])
    }, [category]);

    const onGetAnswer = ({ target }) => {
        console.log('click happened')
        const answer = target.tagName === 'LI' ? target.children[1].innerText : target.innerText;
        const rightAnswer = data[categoryIndex][indexRight].name;
        console.log(target.dataset.count)

        if (answer === rightAnswer) {
            setIsRight(true);
        } else {
            setIsWrong(true);
        }
        setCurrentIndex(target.dataset.count);
    }

    return (
        <div className="container">
            <Header score={score}/>
            <GuessPlayer 
                birdName={isRight ? data[categoryIndex][indexRight].name : '***'}
                audioSource={data[categoryIndex][indexRight].audioUrl} />
                <CategoryList 
                    categories={categories}
                    currentCategory={data[categoryIndex][indexRight].category}/>
            <Row
                left={<BirdsList 
                        items={data[categoryIndex]}                        
                        onGetAnswer={onGetAnswer}
                        indexRight={isRight ? currentIndex : null }
                        indexWrong={isWrong ? currentIndex : null } />}
                right={<BirdDetails isRight={false}/>} />   
            <NextLevel isToNext={false} />    
        </div>
    );
}
export default App;
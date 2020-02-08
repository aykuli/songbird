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
    const [indexRight, setIndexRight] = useState(0);
    const [score, setScore] = useState(0);
    const [category, setCategory] = useState('');
    const [categoryIndex, setCategoryIndex] = useState(0);
    const [isRight, setIsRight] = useState(false);


    useEffect(() => {
        const random = Math.floor(Math.random() * 6);
        console.log(random)
        setIndexRight(() => random);       
    }, [category]);
    console.log(indexRight);
    console.log(data[categoryIndex][indexRight]);

    const onGetAnswer = ({ target: { children }}) => {
        const answer = children[1].innerText;
        const rightAnswer = data[categoryIndex][indexRight].name;

        if (answer === rightAnswer) {
            console.log('правильно!');
            setIsRight(true);
            console.log('isRight: ', isRight);
        }
        
        console.log('isRight: ', isRight); 
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
                        isRight={isRight} />}
                right={<BirdDetails isRight={false}/>} />
            <NextLevel isToNext={false} />    
        </div>
    );
}
export default App;
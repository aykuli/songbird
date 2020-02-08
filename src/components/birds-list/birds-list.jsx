import React from 'react';

import './birds-list.scss';

import BirdItem from '../bird-item';

const BirdsList = ({ items, onGetAnswer, indexRight, wrongIndexes }) => {
    const wrongIndexesArr = Array.from(wrongIndexes);
    
    return (
        <ul 
            className="row__child birds-list"
            onClick={onGetAnswer}>
            {   
                items.map((item, i) => {
                    // если текущий индекс есть в массиве неправильных ответов 
                    let isWrong = (wrongIndexesArr.some(index => i === +index));
                    let isRight = (i === +indexRight && indexRight !== null);
                    
                    return <BirdItem 
                        key={i}
                        i={i}
                        name={item.name} 
                        isRight={isRight} 
                        isWrong={isWrong} />;
                })
            }
        </ul>
    );
}

export default BirdsList;
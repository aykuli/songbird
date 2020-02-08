import React from 'react';

import './birds-list.scss';

import BirdItem from '../bird-item';

const BirdsList = ({ items, onGetAnswer, indexRight, indexWrong }) => (
    <ul 
        className="row__child birds-list"
        onClick={onGetAnswer}>
        {
            items.map((item, i) => {
                // console.log('indexWrong: ',indexWrong);
                // console.log('indexRight: ', indexRight);
                // console.log('i: ', i);
                // let isWrong = false;
                // let isRight = false;
                const isWrong = (i === +indexWrong && indexWrong !== null);
                let isRight = (i === +indexRight && indexRight !== null);
                // console.log('isWrong: ', isWrong, '\n');
                
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

export default BirdsList;
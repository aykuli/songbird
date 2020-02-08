import React from 'react';

import './birds-list.scss';

import BirdItem from '../bird-item';

const BirdsList = ({ items, onGetAnswer, isRight }) => (
    <ul 
        className="row__child birds-list"
        onClick={onGetAnswer}>
        {
            items.map((item, i) => {
                let isWrong = false;
                
                if (i === 4) isWrong = true;
                return <BirdItem key={i} name={item.name} isRight={isRight} isWrong={isWrong} />;
            })
        }
    </ul>
);

export default BirdsList;
import React from 'react';

import './bird-item.scss';

const BirdItem = ({ name, isRight, isWrong }) => {
    const markerStyle = isWrong ? 'bird-item__marker--wrong' : 
                        isRight ? 'bird-item__marker--right' : '';
    return (
        <li className="bird-item">
            <div className={`bird-item__marker ${markerStyle}`}></div>
            <span>{name}</span>
        </li>
)
};

export default BirdItem;
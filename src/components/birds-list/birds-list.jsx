import React from 'react';

import './birds-list.scss';

import BirdItem from '../bird-item';

const BirdsList = ({ items }) => (
    <ul className="row__child birds-list">
        {
            items.map((item, i) => {
                let isRight = false;
                let isWrong = false;
                if (i === 2) isRight = true;
                if (i === 4) isWrong = true;
                return <BirdItem key={i} name={item.name} isRight={isRight} isWrong={isWrong} />;
            })
        }
    </ul>
);

export default BirdsList;
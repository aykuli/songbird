import React from 'react';

import './birds-list.scss';

import BirdItem from '../bird-item';

const items = [
    'Ворон', 'Гусь', 'Голубь', 'Воробей', 'Синица', 'Канарейка'
];

const BirdsList = () => (
    <ul className="row__child birds-list">
        {
        items.map((item, i) => {
            let isRight = false;
            let isWrong = false;
            if (i === 2) isRight = true;
            if (i === 4) isWrong = true;
            return <BirdItem name={item} isRight={isRight} isWrong={isWrong} />;
        })
        }
    </ul>
);

export default BirdsList;
import React from 'react';

import './birds-list.scss';

import BirdItem from '../bird-item';

const items = [
    'Ворон', 'Гусь', 'Голубь', 'Воробей', 'Синица', 'Канарейка'
];

const BirdsList = () => (
    <ul className="birds-list">
        {
        items.map((item, i) => {
            let isActive = false;
            if (i === 2) isActive = true;
            return <BirdItem name={item} isActive={isActive} />;
        })
        }
    </ul>
);

export default BirdsList;
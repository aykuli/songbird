import React from 'react';

import './birds-list.scss';

import BirdsItem from '../bird-item';
import BirdItem from '../bird-item';

const items = [
    'Ворон', 'Гусь', 'Голубь', 'Воробей', 'Синица', 'Канарейка'
];

const BirdsList = () => (
    <ul className="birds-list">
        {
        items.map(item => <BirdItem name={item}/>)
        }
    </ul>
);

export default BirdsList;
import React from 'react';

import './bird-item.scss';

const BirdItem = ({ name }) => (
    <li className="bird-item">
        <span>{name}</span>
    </li>
);

export default BirdItem;
import React from 'react';

import './bird-item.scss';

const BirdItem = ({ name, isActive }) => (
    <li className="bird-item">
        <div className="bird-item__marker"></div>
        <span>{name}</span>
    </li>
);

export default BirdItem;
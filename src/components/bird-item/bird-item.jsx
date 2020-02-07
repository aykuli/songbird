import React from 'react';

import './bird-item.scss';

const BirdItem = ({ name }) => (
    <li className="bird-item">
        {name}
    </li>
);

export default BirdItem;
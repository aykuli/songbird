import React from 'react';

import './next-level.scss';

const NextLevel = (props) => {
    const { isToNext } = props;
    return <button className={`next-level ${isToNext ? '' : ''}`}>Следующий уровень</button>
}

export default NextLevel;
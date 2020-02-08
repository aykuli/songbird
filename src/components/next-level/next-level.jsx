import React from 'react';

import './next-level.scss';

const NextLevel = (props) => {
    const { isToNext, nextLevel } = props;
    return (
        <button 
            className={`next-level ${isToNext ? 'next-level__active' : ''}`}
            onClick={nextLevel}>
            Следующий уровень
        </button>
    );
}

export default NextLevel;
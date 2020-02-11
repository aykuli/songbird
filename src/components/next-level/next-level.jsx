import React from 'react';
import PropTypes from 'prop-types';

import './next-level.scss';

const NextLevel = ({ isToNext, handleNextLevel }) => {
    return (
        <button 
            className={`next-level ${isToNext ? 'next-level__active' : ''}`}
            onClick={handleNextLevel}>
            Следующий уровень
        </button>
    );
}

export default NextLevel;

NextLevel.defaultProps = {
    isToNext: false,
    handleNextLevel: () => {},
};

NextLevel.propTypes = {
    isToNext: PropTypes.bool,
    handleNextLevel: PropTypes.func,
};
import React from 'react';
import PropTypes from 'prop-types';

import './header.scss';

const Header = ({ score, maxScore }) => {
    return (
        <nav className="header">
            <div className="header__brand">
                <div className="header__icon"></div>
                <h1 className="header__title">SongBird </h1>
                <p className="header__slogan">Игра "Угадай птичку!"</p>
            </div>
            <div className="header__score">
                <span>Счет: {score} из {maxScore}</span>
            </div>
        </nav>
    );
}

export default Header;

Header.defaultProps = {
    score: 0,
    maxScore: 0,
};

Header.propTypes = {
    score: PropTypes.number,
    maxScore: PropTypes.number,
};
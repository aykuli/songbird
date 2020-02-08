import React from 'react';

import './header.scss';

const Header = (props) => {
    const { score } = props;
    return (
        <nav className="header">
            <div className="header__brand">
                <div className="header__icon"></div>
                <h1 className="header__title">SongBird </h1>
                <p className="header__slogan">Игра "Угадай птичку!"</p>
            </div>
            <div className="header__score">
                <span>{score} баллов</span>
            </div>
        </nav>
    );
}

export default Header;
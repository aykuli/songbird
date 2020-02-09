import React from 'react';

import './header.scss';

const Header = (props) => {
    const { score } = props;
    const words = ['баллов', 'балла', 'балл'];
    const word = score >= 5 
        ? words[0]
        : score === 1 
        ? words[2]
        : words[1];
    return (
        <nav className="header">
            <div className="header__brand">
                <div className="header__icon"></div>
                <h1 className="header__title">SongBird </h1>
                <p className="header__slogan">Игра "Угадай птичку!"</p>
            </div>
            <div className="header__score">
                <span>{score} {word}</span>
            </div>
        </nav>
    );
}

export default Header;
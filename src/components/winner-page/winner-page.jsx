import React, { useState } from 'react';
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;

import './winner-page.scss';

import pdfOptions from '../../dataBase/certificate';


const WinnerPage = ({ handleGameStart }) => {
    const [playerName, setPlayerName] = useState('');

    const handleChange = ({ target: { value}}) => setPlayerName(value);

    const handleSubmit = (e) => {
        e.preventDefault();
        pdfMake.createPdf(docDefinition).download();
    }
    const date = new Date();
    const options = {month: 'long', day: 'numeric', year: 'numeric'};
    const docDefinition = pdfOptions(playerName, date, options);

    return (
        <div className="winner-page__wrap">
            <div className="winner-page">
                <h1 className="winner-page__title" >Поздравляю!</h1>
                <p className="winner-page__text">Вы набрали максимальный балл!</p>
                <form 
                    className="winner-page__form"
                    onSubmit={handleSubmit}>
                    <label className="winner-page__label"
                        htmlFor="sertificate-name">
                        Введите ваше имя для сертификата:
                    </label>
                    <input 
                        className="winner-page__input--txt"
                        name="sertificate-name"
                        placeholder="Петр Петров"
                        value={playerName}
                        onChange={handleChange} />
                    <button className="winner-page__btn">Скачать сертификат</button>
                </form>
                <button 
                    className="winner-page__btn" 
                    onClick={handleGameStart}>Хочу играть еще!</button>
            </div>
        </div>
    );
};

export default WinnerPage;
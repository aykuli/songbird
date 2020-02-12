import React, { useState } from 'react';
import PropTypes from 'prop-types';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';

import './winner-page.scss';

import pdfOptions from '../../dataBase/certificate';

pdfMake.vfs = pdfFonts.pdfMake.vfs;

const WinnerPage = ({ handleGameStart }) => {
  const [playerName, setPlayerName] = useState('');

  const date = new Date();
  const options = { month: 'long', day: 'numeric', year: 'numeric' };
  const docDefinition = pdfOptions(playerName, date, options);

  const handleSubmit = e => {
    e.preventDefault();
    pdfMake.createPdf(docDefinition).download();
  };

  const handleChange = ({ target: { value } }) => setPlayerName(value);

  return (
    <div className="winner-page__wrap">
      <div className="winner-page">
        <h1 className="winner-page__title">Поздравляю!</h1>
        <p className="winner-page__text">Вы набрали максимальный балл!</p>
        <form className="winner-page__form" onSubmit={handleSubmit}>
          <label className="winner-page__label" htmlFor="sertificate-name">
            Введите ваше имя для сертификата:
            <input
              className="winner-page__input--txt"
              type="text"
              name="sertificate-name"
              placeholder="Петр Петров"
              value={playerName}
              onChange={handleChange}
            />
          </label>
          <button className="winner-page__btn" type="button">
            Скачать сертификат
          </button>
        </form>
        <button className="winner-page__btn" onClick={handleGameStart} type="button">
          Хочу играть еще!
        </button>
      </div>
    </div>
  );
};

export default WinnerPage;

WinnerPage.defaultProps = {
  handleGameStart: () => {}
};

WinnerPage.propTypes = {
  handleGameStart: PropTypes.func
};

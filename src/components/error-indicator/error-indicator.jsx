import React from 'react';

import './error-indicator.scss';

const ErrorIndicator = () => {
  return (
    <div className="error-indicator">
      <div>
        <h3 className="error-indicator__title">Что-то случилось!</h3>
        <p className="error-indicator__txt">Наш голубь-почтальон уже улетел к нашим разработчикам.</p>
        <p className="error-indicator__txt">Не беспокоитесь, все будет исправлено.</p>
        <img
          // eslint-disable-next-line global-require
          src={require('./imgs/dove.png').default}
          className="error-indicator__img"
          alt="!!!ERROR!!!"
        />
      </div>
    </div>
  );
};

export default ErrorIndicator;

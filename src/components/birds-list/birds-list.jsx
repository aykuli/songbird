import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import './birds-list.scss';

import BirdItem from '../bird-item';

const BirdsList = ({ items, onGetAnswer, indexRight, wrongIndexes }) => {
  // чтобы компонент обновлялся только тогда, когда зменился массив с неправильными ответами или сам список
  useEffect(() => {}, [wrongIndexes, items]);

  return (
    <ul className="row__child birds-list" role="presentation" onClick={onGetAnswer}>
      {items.map((item, i) => {
        // если текущий индекс есть в массиве неправильных ответов
        const isWrong = wrongIndexes.some(index => i === +index);
        const isRight = i === +indexRight && indexRight !== null;

        return <BirdItem key={item.name} i={i} name={item.name} isRight={isRight} isWrong={isWrong} />;
      })}
    </ul>
  );
};

export default BirdsList;

BirdsList.defaultProps = {
  items: [],
  onGetAnswer: () => {},
  indexRight: null,
  wrongIndexes: []
};

BirdsList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  onGetAnswer: PropTypes.func,
  indexRight: PropTypes.number,
  wrongIndexes: PropTypes.arrayOf(PropTypes.string)
};

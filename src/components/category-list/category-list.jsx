import React from 'react';
import PropTypes from 'prop-types';

import './category-list.scss';

const CategoryList = ({ categories, currentCategory }) => {
  return (
    <div className="category__wrap">
      <h3 className="category__title">Текущая категория:</h3>
      <ul className="category__list">
        {categories.map(category => {
          const style = category === currentCategory ? 'category--active' : '';
          return (
            <li key={`${category}`} className={`category ${style}`}>
              {category}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CategoryList;

CategoryList.defaultProps = {
  categories: [],
  currentCategory: 0
};

CategoryList.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string),
  currentCategory: PropTypes.string
};

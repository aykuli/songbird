import React from 'react';

import './category-list.scss';

const CategoryList = ({ categories, currentCategory }) => {
    return (
        <div className="category__wrap">
            <h3 className="category__title">Текущая категория:</h3>
            <ul className="category__list">
                {
                    categories.map((category, i) => {
                        const style = category === currentCategory ? 'category--active' : '';
                        return (
                            <li key={`${category}-${i}`} className={`category ${style}`}>
                                {category}
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
}

export default CategoryList;
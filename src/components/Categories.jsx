import React from 'react';
import '../assets/styles/components/Categories.scss';

// eslint-disable-next-line prefer-const
//let NameCategory = 'My list';

const Categories = ({ children, title }) => (
  <div className='categories'>
    <h3 className='categories__title'>{title}</h3>
    {children}
  </div>
);

export default Categories;

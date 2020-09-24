import React from 'react';
import '../assets/styles/components/Search.scss';

//Se prefiere let, ya que si se muta de idioma pueda cambiar
// eslint-disable-next-line prefer-const
let MainTitleText = 'What would like to see today?';
// eslint-disable-next-line prefer-const
let MainTitlePlaceholder = 'Search...';

const Search = () => (
  <section className='main'>
    <h2 className='main__title'>{MainTitleText}</h2>
    <input className='input' type='text' placeholder={MainTitlePlaceholder} />
  </section>
);

export default Search;

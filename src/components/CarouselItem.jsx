import React from 'react';
import '../assets/styles/components/CarouselItem.scss';
import playIcon from '../assets/static/circled-play.png';
import plusIcon from '../assets/static/checked.png';
import carouselImageOne from '../assets/static/cat.jpeg';

const CarouselItem = () => (
  <div className='carousel-item'>
    <img className='carousel-item__img' src={carouselImageOne} alt='character' />
    <div className='carousel-item__details'>
      <div>
        <img className='carousel-item__details--play' src={playIcon} alt='play' />
        <img className='carousel-item__details--plus' src={plusIcon} alt='plus' />
      </div>
      <p className='carousel-item__details--title'>Titulo descriptivo</p>
      <p className='carousel-item__details--subtitle'>2019 16+ 114 min</p>
    </div>
  </div>
);

export default CarouselItem;

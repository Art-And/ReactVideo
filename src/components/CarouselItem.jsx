import React from 'react';
import '../assets/styles/components/CarouselItem.scss';
import playIcon from '../assets/static/circled-play.png';
import plusIcon from '../assets/static/checked.png';
//import carouselImageOne from '../assets/static/cat.jpeg';

const CarouselItem = ({ cover, title, year, contentRating, duration }) => (
  <div className='carousel-item'>
    <img className='carousel-item__img' src={cover} alt={title} />
    <div className='carousel-item__details'>
      <div>
        <img className='carousel-item__details--play' src={playIcon} alt='play' />
        <img className='carousel-item__details--plus' src={plusIcon} alt='plus' />
      </div>
      <p className='carousel-item__details--title'>{title}</p>
      <p className='carousel-item__details--subtitle'>{`${year} ${contentRating} ${duration}`}</p>
    </div>
  </div>
);

export default CarouselItem;

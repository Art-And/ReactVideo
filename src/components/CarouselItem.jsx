import React from 'react';
import '../assets/styles/components/CarouselItem.scss';
import playIcon from 'https://img.icons8.com/dusk/64/000000/circled-play.png';
import plusIcon from 'https://img.icons8.com/dusk/64/000000/checked.png';

const CarouselItem = () => (
  <div className='carousel-item'>
    <img className='carousel-item__img' src='https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' alt='character' />
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

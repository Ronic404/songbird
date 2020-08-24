import React from 'react';
import PropTypes from 'prop-types';
import BirdSubDescription from '../BirdSubDescription/BirdSubDescription';
import birdsData from '../../data/birdsData';

export default function BirdDescription({ page, id }) {
  if (id < 0) {
    return (
      <div className="bird-description">
        <p className="bird-description__preview">Послушайте плеер<br />Выберите птицу из списка</p>
      </div>
    )    
  }
  return (
    <div className="bird-description">
      <div className="bird-description__top">
        <img className="bird-description__top-image" src={birdsData[page][id].image} alt="logo" />
        <BirdSubDescription page={page} id={id} />
      </div>
      <p className="bird-description__bottom">{birdsData[page][id].description}</p>
    </div>
  )
}

BirdDescription.propTypes = {
  page: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
}
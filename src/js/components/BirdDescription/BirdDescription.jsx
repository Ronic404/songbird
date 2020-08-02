import React from 'react';
import logo from '../../../assets/images/logo.svg';
import BirdSubDescription from '../BirdSubDescription/BirdSubDescription';

export default function BirdDescription() {
  return (
    <div className="bird-description">
      <div className="bird-description__top">
        <img className="bird-description__top-image" src={logo} alt="sgsdgs" />
        <BirdSubDescription />
      </div>
      <p className="bird-description__bottom">Описание</p>
    </div>
  )
}
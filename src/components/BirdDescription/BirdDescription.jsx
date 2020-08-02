import React from 'react';
import logo from '../../assets/images/logo.svg';
import BirdSubDescription from '../BirdSubDescription/BirdSubDescription';

export default function BirdDescription() {
  return (
    <>
      <img src={logo} alt="sgsdgs" />
      <BirdSubDescription />
      <p>Описание</p>
    </>
  )
}
/* eslint-disable react/prop-types */
import React from 'react';
import logo from '../../../assets/images/logo.svg';
import FamilyOfBirdsList from '../FamilyOfBirdsList/FamilyOfBirdsList';

export default function Header(props) {
  const { score, page } = props;
  
  return (
    <div className="header">
      <div className="header__top">
        <img className="header__top-logo" src={logo} alt="logo" />
        <p className="header__top-score">Score: {score}</p>
      </div>
      <FamilyOfBirdsList page={page}/>
    </div>
  );
}

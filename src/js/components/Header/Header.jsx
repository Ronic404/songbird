import React from 'react';
import logo from '../../../assets/images/logo.svg';
import FamilyOfBirdsList from '../FamilyOfBirdsList/FamilyOfBirdsList';

export default function Header() {
  const score = 0;

  return (
    <div className="header">
      <div className="header__top">
        <img className="header__top-logo" src={logo} alt="logo" />
        <p className="header__top-score">Score: {score}</p>
      </div>
      <FamilyOfBirdsList />
    </div>
  );
}

import React from 'react';
import PropTypes from 'prop-types';
import logo from '../../../assets/images/logo.svg';
import FamilyOfBirdsList from '../FamilyOfBirdsList/FamilyOfBirdsList';

export default function Header({ score, page }) {
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

Header.propTypes = {
  score: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
}
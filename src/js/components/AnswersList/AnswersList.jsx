import React from 'react';
import PropTypes from 'prop-types';
import birdsData from '../../data/birdsData';
import chooseRightOption from '../../utils/chooseRightOption';

export default function AnswersList({ page, randomIndex, setRight }) {
  const list = birdsData[page].map(bird => 
    <li className="answers-list__item" key={bird.id}>
      <div className="answers-list__item-marker" />
      <div className="answers-list__item-name">{bird.name}</div>      
    </li>
  )
  chooseRightOption(page, randomIndex, setRight);
  return (
    <ul className="answers-list">{list}</ul>
  )
}

AnswersList.propTypes = {
  page: PropTypes.number.isRequired,
  randomIndex: PropTypes.number.isRequired,
  setRight: PropTypes.func.isRequired,
}

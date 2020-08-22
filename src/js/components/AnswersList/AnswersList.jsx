import React from 'react';
import PropTypes from 'prop-types';
import birdsData from '../../data/birdsData';
import chooseRightOption from '../../utils/chooseRightOption';

function getBirdsList(page) {
  return birdsData[page].slice().sort(() => Math.random() - 0.5)
}

export default function AnswersList({ page, randomIndex, setRight }) {
  const list = getBirdsList(page).map(bird => 
    <li className="answers-list__item" key={bird.id}>
      <div className="answers-list__item-marker" />
      <div className="answers-list__item-name">{bird.name}</div>      
    </li>
  )
  
  setTimeout(() => {
    chooseRightOption(page, randomIndex, setRight);
  }, 0);
  
  return (
    <ul className="answers-list">{list}</ul>
  )
}

AnswersList.propTypes = {
  page: PropTypes.number.isRequired,
  randomIndex: PropTypes.number.isRequired,
  setRight: PropTypes.bool.isRequired,
}

// AnswersList.defaultProps = {
//   decreasePoints: null,
// }

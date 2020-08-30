import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import birdsData from '../../data/birdsData';
import chooseRightOption from '../../utils/chooseRightOption';

export default function AnswersList({ page, randomIndex, setRight, isRight, getId }) {
  const list = birdsData[page].map((bird, i) => 
    <li className="answers-list__item" key={bird.id} id={i}>
      <div className="answers-list__item-marker" />
      <div className="answers-list__item-name">{bird.name}</div>      
    </li>
  )

  useEffect(() => {
    chooseRightOption(page, randomIndex, setRight, isRight, getId);
  },[isRight])

  return (
    <ul className="answers-list">{list}</ul>
  )
}

AnswersList.propTypes = {
  page: PropTypes.number.isRequired,
  randomIndex: PropTypes.number.isRequired,
  setRight: PropTypes.func.isRequired,
  isRight: PropTypes.bool.isRequired,
  getId: PropTypes.func.isRequired,
}

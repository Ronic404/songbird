/* eslint-disable react/prop-types */

import React from 'react';
import birdsData from '../../data/birdsData';
import chooseRightOption from '../../utils/chooseRightOption';

function getBirdsList(page) {
  return birdsData[page].slice().sort(() => Math.random() - 0.5)
}

export default function AnswersList(props) {
  const { page, randomIndex, setRight } = props;  
  const list = getBirdsList(page).map(bird => 
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

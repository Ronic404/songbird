import React from 'react';
import birdsData from '../../data/birdsData';

function getBirdsList() {
  return birdsData[0].slice().sort(() => Math.random() - 0.5)
}

export default function AnswersList() {
  const list = getBirdsList().map(bird => 
    <li className="answers-list__item" key={bird.id}>
      <div className="answers-list__item-marker" />
      <div className="answers-list__item-name">{bird.name}</div>      
    </li>
  )

  return (
    <ul className="answers-list">{list}</ul>
  )
}
import React from 'react';
import birdsData from '../../data/birdsData';

function getBirdsList() {
  return birdsData[0].slice().sort(() => Math.random() - 0.5)
}

export default function AnswersList() {
  const list = getBirdsList().map(bird => 
    <li key={bird.id}>{bird.name}</li>
  )

  return (
    <ul className="answersList">{list}</ul>
  )
}
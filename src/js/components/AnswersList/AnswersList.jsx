/* eslint-disable react/prop-types */

import React from 'react';
import birdsData from '../../data/birdsData';

function getBirdsList(page) {
  return birdsData[page].slice().sort(() => Math.random() - 0.5)
}

function chooseRightOption(setRight) {
  const list = document.querySelectorAll('.answers-list__item');
  list.forEach(item => {
    item.addEventListener('click', () => {
      if (item.querySelector('.answers-list__item-name').textContent === 'Ворон'){
        item.querySelector('.answers-list__item-marker').classList.add('answers-list__item-marker_right');
        setRight();
      } else {
        item.querySelector('.answers-list__item-marker').classList.add('answers-list__item-marker_wrong');
      }
    })
  })
  window.console.log(list);
}



export default function AnswersList(props) {
  const { page, setRight } = props;  
  const list = getBirdsList(page).map(bird => 
    <li className="answers-list__item" key={bird.id}>
      <div className="answers-list__item-marker" />
      <div className="answers-list__item-name">{bird.name}</div>      
    </li>
  )
  chooseRightOption(setRight);
  return (
    <ul className="answers-list">{list}</ul>
  )
}

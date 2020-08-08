/* eslint-disable react/prop-types */
import React from 'react';
import birdsData from '../../data/birdsData';
import bird from '../../../assets/images/bird.png';

export default function QuestionBlock(props) {
  const { page, randomIndex, isRight } = props;
  const url = isRight ? birdsData[page][randomIndex].image : bird;
  const name = isRight ? birdsData[page][randomIndex].name : '******';

  return (
    <div className="question-block"> 
      <img className="question-block__image" src={url} alt="Bird" />
      <div className="question-block__description">
      <h2 className="question-block__description-title">{name}</h2>
        <audio className="question-block__description-audio" src={birdsData[page][randomIndex].audio} controls>
          <track kind="captions" />
        </audio>  
      </div>
    </div>
  );
}
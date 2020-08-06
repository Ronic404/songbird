/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react';
import birdsData from '../../data/birdsData';
// import bird from '../../../assets/images/bird.png';

export default function QuestionBlock(props) {
  const { page, randomIndex } = props;

  return (
    <div className="question-block"> 
      <img className="question-block__image" src={birdsData[page][randomIndex].image} alt="Bird" />
      <div className="question-block__description">
        <h2 className="question-block__description-title">******</h2>
        <audio className="question-block__description-audio" src={birdsData[page][randomIndex].audio} controls />
      </div>
    </div>
  );
}
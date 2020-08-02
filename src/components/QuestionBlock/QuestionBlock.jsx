import React from 'react';
import logo from '../../assets/images/logo.svg';

export default function QuestionBlock() {
  return (
    <div className="question-block"> 
      <img className="question-block__image" src={logo} alt="qweqwe" />
      <p className="question-block__title">erwte</p>
      <audio className="question-block__audio" controls>
        <track kind="captions" />
      </audio>
    </div>
  );
}
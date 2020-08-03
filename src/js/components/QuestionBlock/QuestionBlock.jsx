import React from 'react';
import bird from '../../../assets/images/bird.png'

export default function QuestionBlock() {
  return (
    <div className="question-block"> 
      <img className="question-block__image" src={bird} alt="qweqwe" />
      <div className="question-block__description">
        <h2 className="question-block__description-title">******</h2>
        <audio className="question-block__description-audio" controls>
          <track kind="captions" />
        </audio>
      </div>
    </div>
  );
}
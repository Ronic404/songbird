import React from 'react';
import birdsData from '../../data/birdsData';

export default function QuestionBlock() {
  return (
    <div className="question-block"> 
      <img className="question-block__image" src={birdsData[0].image} alt="qweqwe" />
      <div className="question-block__description">
        <h2 className="question-block__description-title">Ястреб</h2>
        <audio className="question-block__description-audio" controls>
          <track kind="captions" />
        </audio>
      </div>
    </div>
  );
}
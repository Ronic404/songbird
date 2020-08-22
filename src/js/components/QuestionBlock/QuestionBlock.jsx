import React from 'react';
import PropTypes from 'prop-types';
import birdsData from '../../data/birdsData';
import bird from '../../../assets/images/bird.png';

export default function QuestionBlock({ page, randomIndex, isRight }) {
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

QuestionBlock.propTypes = {
  page: PropTypes.number.isRequired,
  randomIndex: PropTypes.number.isRequired,
  isRight: PropTypes.bool.isRequired,
}